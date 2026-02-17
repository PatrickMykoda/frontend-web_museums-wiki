import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obra.service';
import { ObraDetail } from '../obra-detail';
import { MuseoDetail } from 'src/app/museo/museo-detail/museo-detail';

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

  onSelected(artwork: ObraDetail): void {
    if (this.selectedArtwork){
      document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedArtwork = artwork;
    document.getElementById(artwork.id.toString())?.classList.add('selected-list-item');
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

  browseArtworks(){
    clearInterval(this.intervalId);
    if (this.selectedArtwork){
      document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedArtwork = this.artworks[0];
    document.getElementById(this.artworks[0].id.toString())?.classList.add('selected-list-item');
    this.scrollToSelectedArtwork(this.artworks[0].id);
    let i = 1;
    this.intervalId = setInterval(() => {
      if(i >= this.artworks.length-1){
        clearInterval(this.intervalId);
      }
      if (this.selectedArtwork){
        document.getElementById(this.selectedArtwork.id.toString())?.classList.remove('selected-list-item');
      }
      this.selectedArtwork = this.artworks[i];
      document.getElementById(this.artworks[i].id.toString())?.classList.add('selected-list-item');
      this.scrollToSelectedArtwork(this.artworks[i].id);
      i++;
    }, 1000);
  }

  scrollToSelectedArtwork(artworkId: number): void {
    setTimeout(() => {
      const selectedElement = document.getElementById(artworkId.toString());
      if (selectedElement) {
        selectedElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 100);
  }

  ngOnInit() {
    this.getArtworks();
  }

}
