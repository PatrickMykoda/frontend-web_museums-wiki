import { Component, Input, OnInit } from '@angular/core';
import { ExhibicionDetail } from '../exhibicion-detail';

@Component({
  selector: 'app-exhibicion-detail',
  templateUrl: './exhibicion-detail.component.html'
})
export class ExhibicionDetailComponent implements OnInit {

  @Input() exhibicionDetail!: ExhibicionDetail;

  constructor() { }

  ngOnInit() {
  }

}
