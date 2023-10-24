import { Component, Input, OnInit } from '@angular/core';
import { Obra } from '../obra';
import { ObraDetail } from '../obra-detail';
import { ActivatedRoute } from '@angular/router';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-detail',
  templateUrl: './obra-detail.component.html'
})
export class ObraDetailComponent implements OnInit {

  obraId!: string;
  @Input() obraDetail!: ObraDetail;

  constructor(
    private route: ActivatedRoute,
    private obraService: ObraService
  ) { }

  getObra(){
    this.obraService.getObra(this.obraId).subscribe(obra=>{
      this.obraDetail = obra;
    })
  }

  ngOnInit() {
    if(this.obraDetail === undefined){
      this.obraId = this.route.snapshot.paramMap.get('id')!
      if (this.obraId) {
        this.getObra();
      }
    }
  }
 }
