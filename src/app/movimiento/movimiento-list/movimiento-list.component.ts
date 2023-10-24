import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../movimiento.service';
import { MovimientoDetail } from '../movimiento-detail';

@Component({
  selector: 'app-movimiento-list',
  templateUrl: './movimiento-list.component.html',
  styleUrls: ['./movimiento-list.component.css']
})
export class MovimientoListComponent implements OnInit {

  selected: Boolean = false;
  selectedMovimiento!: MovimientoDetail;
  movimientos: Array<MovimientoDetail> = [];
  constructor(private movimientoService: MovimientoService) { }

  getMovementes(): void {
    this.movimientoService.getMovements().subscribe((movimientos) => {
      this.movimientos = movimientos;
    });
  }

  onSelected(movimiento: MovimientoDetail): void {
    this.selected = true;
    this.selectedMovimiento = movimiento;
  }

  ngOnInit(): void {
    this.getMovementes();
  }

}
