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
  selected = false;

  onSelected(museo: MuseoDetail): void {
    this.selected = true;
    this.selectedMuseo = museo;
  }

  getMuseos() {
    this.museoService.getMuseos().subscribe((museos) => {
      this.museos = museos;
    });
  }

  ngOnInit() {
    this.getMuseos();
  }

}
