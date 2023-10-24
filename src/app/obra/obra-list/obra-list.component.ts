import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obra.service';
import { ObraDetail } from '../obra-detail';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {

  selectedObra!: ObraDetail;
  selected: Boolean = false;
  obras: Array<ObraDetail> = [];
  constructor(private obraService: ObraService) { }

  getObras(): void {
    this.obraService.getObras().subscribe((obras) => {
      this.obras = obras;
    });
  }

  onSelected(obra: ObraDetail): void {
    this.selected = true;
    this.selectedObra = obra;
  }

  ngOnInit() {
    this.getObras();
  }

}
