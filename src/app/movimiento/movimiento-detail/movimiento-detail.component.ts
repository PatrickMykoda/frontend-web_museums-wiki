import { Component, OnInit, Input } from '@angular/core';
import { MovimientoDetail } from '../movimiento-detail';
import { ActivatedRoute } from '@angular/router';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-movimiento-detail',
  templateUrl: './movimiento-detail.component.html'
})
export class MovimientoDetailComponent implements OnInit {

  movimientoId!: string;
  @Input() movimientoDetail!: MovimientoDetail;

  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoService
  ) { }

  getMovement(){
    this.movimientoService.getMovement(this.movimientoId).subscribe(movimiento=>{
      this.movimientoDetail = movimiento;
    })
  }

  ngOnInit() {
    if(this.movimientoDetail === undefined){
      this.movimientoId = this.route.snapshot.paramMap.get('id')!
      if (this.movimientoId) {
        this.getMovement();
  }
}
}
}
