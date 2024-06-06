import { Component, OnInit } from '@angular/core';
import { MuseoDetail } from '../museo-detail/museo-detail';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo-list',
  templateUrl: './museo-list.component.html',
  styleUrls: ['./museo-list.component.css']
})
export class MuseoListComponent implements OnInit {

  constructor(private museoService: MuseoService) { }
  museos: Array<MuseoDetail> = [];

  selectedMuseo!: MuseoDetail;

  onSelected(museo: MuseoDetail): void {
    if (this.selectedMuseo){
      document.getElementById(this.selectedMuseo.id.toString())?.classList.remove('selected-list-item');
    }
    this.selectedMuseo = museo;
    document.getElementById(museo.id.toString())?.classList.add('selected-list-item');
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

  ngOnInit() {
    this.getMuseos();
  }

}
