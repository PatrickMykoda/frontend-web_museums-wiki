import { Component, OnInit } from '@angular/core';
import { ExhibicionMuseoDetail } from '../exhibicion-museo-detail';
import { ExhibicionService } from '../exhibicion.service';
import { ExhibicionDetail } from '../exhibicion-detail';

@Component({
  selector: 'app-exhibicion-list',
  templateUrl: './exhibicion-list.component.html',
  styleUrls: ['./exhibicion-list.component.css']
})
export class ExhibicionListComponent implements OnInit {

  selectedExhibicion!: ExhibicionDetail;
  selected: Boolean = false;
  museumsOfExhibitions: Array<ExhibicionMuseoDetail> = [];
  constructor(private exhibicionService: ExhibicionService) { }

  getExhibitions(): void {
    this.exhibicionService.getExhibitions().subscribe((exhibitions) => {
      this.museumsOfExhibitions = exhibitions;
    });
  }

  onSelected(exhibicion: ExhibicionDetail): void {
    this.selected = true;
    this.selectedExhibicion = exhibicion;
  }

  ngOnInit() {
    this.getExhibitions();
  }

}
