import { Component, OnInit } from '@angular/core';
import { MuseoDetail } from '../museo-detail/museo-detail';
import { MuseoService } from '../museo.service';

interface ExtendedScrollIntoViewOptions extends ScrollIntoViewOptions {
  container?: 'all' | 'nearest';
}

@Component({
  selector: 'app-museo-list',
  templateUrl: './museo-list.component.html',
  styleUrls: ['./museo-list.component.css']
})
export class MuseoListComponent implements OnInit {

  constructor(private museoService: MuseoService) { }
  museos: Array<MuseoDetail> = [];
  selectedMuseo!: MuseoDetail;
  intervalId: any;
  isPlaying: boolean = false;

  onSelected(museo: MuseoDetail): void {
    if (this.isPlaying) {
      this.stopPlaying();
    } 
    if (this.selectedMuseo){
      document.getElementById(this.selectedMuseo.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedMuseo = museo;
    document.getElementById(museo.id.toString())?.classList.add('selected-list-item');
    this.setArtworkFrames();
    clearInterval(this.intervalId);
    console.log(museo.id);
  }

  getMuseos() {
    this.museoService.getMuseos().subscribe((museos) => {
      this.museos = museos;
      this.onSelected(this.museos[0]);
      setTimeout(() => { 
        document.getElementById(this.museos[0].id.toString())?.classList.add('selected-list-item')
      }, 50);
    });
  }

  hoverEffect(id: number) {
    document.getElementById(id.toString())?.classList.add('list-item-hovered');
    document.getElementById("bottom-"+id.toString())?.classList.add('item-bottom-hovered');
  }

  setArtworkFrames(){
    setTimeout(() => {
      let artworkFrames = Array.from(document.getElementsByClassName('list-image-frame'));
      let currentRandomNum = 0;
      artworkFrames.forEach(element => {
        let randomNum = Math.floor(Math.random() * 9) + 1;
        while (randomNum === currentRandomNum){
          randomNum = Math.floor(Math.random() * 9) + 1;
        }
        currentRandomNum = randomNum;
        element.classList.add('frame'+randomNum.toString());
      });
    }, 50);
  }

  browseMuseums(){
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
    this.setArtworkFrames();
    this.scrollToSelectedMuseum(this.selectedMuseo.id);
    let i = this.museos.indexOf(this.selectedMuseo);
    this.intervalId = setInterval(() => {
      if (i > this.museos.length-1){
        i = 0;
      }
      if (this.selectedMuseo){
        document.getElementById(this.selectedMuseo.id.toString())?.classList.remove('selected-list-item');
      }
      this.selectedMuseo = this.museos[i];
      document.getElementById(this.museos[i].id.toString())?.classList.add('selected-list-item');
      this.setArtworkFrames();
      i++;
    }, 1000);
  }

  stopPlaying() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
    document.querySelectorAll('.fa-play, .fa-pause').forEach(el => el.classList.toggle('hide'));
  }

  scrollToSelectedMuseum(museumId: number): void {
    setTimeout(() => {
      const selectedElement = document.getElementById(museumId.toString());
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
    this.getMuseos();
  }

}
