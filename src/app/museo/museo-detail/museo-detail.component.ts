import { Component, Input, OnInit } from '@angular/core';
import { MuseoDetail } from './museo-detail';
import { ActivatedRoute } from '@angular/router';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo-detail',
  templateUrl: './museo-detail.component.html'
})
export class MuseoDetailComponent implements OnInit {

  @Input()museoDetail!: MuseoDetail;
  museoId!: string;

  constructor(
    private route: ActivatedRoute,
    private museoService: MuseoService
  ) { }

  getMuseo(){
    this.museoService.getMuseo(this.museoId).subscribe(museo=>{
      this.museoDetail = museo;
      this.setArtworkFrames();
      this.setDescriptionFontSize();
    })
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

  setDescriptionFontSize(){
    setTimeout(() => {
      let descriptionElement = document.getElementById('museum-description-text')!;
      console.log(descriptionElement);
      let descriptionLength = this.museoDetail.description.length;
      if(descriptionLength < 100){
        descriptionElement.setAttribute("style", "font-size: 2rem");
      } else if (descriptionLength < 200) {
        descriptionElement.setAttribute("style", "font-size: 1.65rem");
      } else if (descriptionLength < 300) {
        descriptionElement.setAttribute("style", "font-size: 1.45rem");
      } else if (descriptionLength < 400) {
        descriptionElement.setAttribute("style", "font-size: 1.25rem");
      } else if (descriptionLength < 600) {
        descriptionElement.setAttribute("style", "font-size: 1.05rem");
      } else if (descriptionLength < 800) {
        descriptionElement.setAttribute("style", "font-size: 0.9rem");
      } else {
        descriptionElement.setAttribute("style", "font-size: 0.8rem");
      }
    }, 300);
  }

  ngOnInit() {
    if(this.museoDetail === undefined){
      this.museoId = this.route.snapshot.paramMap.get('id')!
      if (this.museoId) {
        this.getMuseo();
      }
    }
 }
}
