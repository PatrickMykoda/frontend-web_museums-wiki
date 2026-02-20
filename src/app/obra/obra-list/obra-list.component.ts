import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obra.service';
import { ObraDetail } from '../obra-detail';
import { MuseoDetail } from 'src/app/museo/museo-detail/museo-detail';

interface ExtendedScrollIntoViewOptions extends ScrollIntoViewOptions {
  container?: 'all' | 'nearest';
}

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {


  constructor(private obraService: ObraService) { }
      artworks: Array<ObraDetail> = [];
      selectedArtwork!: ObraDetail;
      intervalId: any;
      isPlaying: boolean = false;
      ArtistFrameNum: number = 0;
      MuseumFrameNum: number = 0;

  onSelected(artwork: ObraDetail): void {
    if (this.isPlaying) {
      this.stopPlaying();
    }
    if (this.selectedArtwork){
      document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedArtwork = artwork;
    document.getElementById(artwork.id.toString())?.classList.add('selected-list-item');
    this.setFrames();
    this.scrollToSelectedArtwork(artwork.id);
    clearInterval(this.intervalId);
    console.log(artwork.id);
  }

  getArtworks() {
    this.obraService.getObras().subscribe((artworks) => {
      this.artworks = artworks;
      this.onSelected(this.artworks[0]);
      setTimeout(() => { 
        document.getElementById(this.artworks[0].id.toString())?.classList.add('selected-list-item')
      }, 50);
    });
  }

  hoverEffect(id: number) {
    document.getElementById(id.toString())?.classList.add('list-item-hovered');
    document.getElementById("bottom-"+id.toString())?.classList.add('item-bottom-hovered');
  }

  setFrames(){
    setTimeout(() => {
      console.log("Setting artist frame...");
      let artistFrame = document.getElementById('artwork-detail-artist-frame');
      artistFrame?.classList.remove('frame'+this.ArtistFrameNum.toString());
      let randomNum = Math.floor(Math.random() * 9) + 1;
      this.ArtistFrameNum = randomNum;
      artistFrame?.classList.add('frame'+randomNum.toString());
      console.log("Artist frame classes:", artistFrame?.classList);

      console.log("Setting museum frame...");
      let museumFrame = document.getElementById('artwork-detail-museum-frame');
      museumFrame?.classList.remove('frame'+this.MuseumFrameNum.toString());
      randomNum = Math.floor(Math.random() * 9) + 1;
      while (randomNum === this.ArtistFrameNum){
        randomNum = Math.floor(Math.random() * 9) + 1; 
      };
      this.MuseumFrameNum = randomNum;
      museumFrame?.classList.add('frame'+randomNum.toString());
      console.log("Museum frame classes:", museumFrame?.classList);
    }, 50);
  }

  browseArtworks(){
    if (this.isPlaying) {
      // Currently playing - pause it
      this.stopPlaying();
    } else {
      // Currently paused - start playing
      this.startPlaying();
    }
  }

  startPlaying() {
    this.isPlaying = true;
    clearInterval(this.intervalId);
    document.querySelectorAll('.fa-play, .fa-pause').forEach(el => el.classList.toggle('hide'));
    
    // Set initial index based on current selection - start from next artwork
    let i = this.artworks.indexOf(this.selectedArtwork);
    if(i >= this.artworks.length){
      i = 0;
    } else {
      i++;
    }

    if (this.selectedArtwork){
      document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedArtwork = this.artworks[i];
    document.getElementById(this.artworks[i].id.toString())?.classList.add('selected-list-item');
    this.setFrames();
    this.scrollToSelectedArtwork(this.artworks[i].id);
    i++;
    
    // Continue with interval for subsequent transitions
    this.intervalId = setInterval(() => {
      if(i >= this.artworks.length){
        i = 0;
      }
      if (this.selectedArtwork){
        document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
      }
      this.selectedArtwork = this.artworks[i];
      document.getElementById(this.artworks[i].id.toString())?.classList.add('selected-list-item');
      this.setFrames();
      this.scrollToSelectedArtwork(this.artworks[i].id);
      i++;
    }, 1000);
  }

  stopPlaying() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
    document.querySelectorAll('.fa-play, .fa-pause').forEach(el => el.classList.toggle('hide'));
  }

  scrollToSelectedArtwork(artworkId: number): void {
    setTimeout(() => {
      const selectedElement = document.getElementById(artworkId.toString());
      if (selectedElement) {
        selectedElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          container: 'nearest',
          inline: 'nearest'
        } as ExtendedScrollIntoViewOptions);
      }
    }, 100);
  }

  ngOnInit() {
    this.getArtworks();
  }

}
