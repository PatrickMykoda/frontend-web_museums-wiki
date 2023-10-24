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
    })
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
