import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-movimiento-create',
  templateUrl: './movimiento-create.component.html'
})
export class MovimientoCreateComponent implements OnInit {

  movimientoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movimientoService: MovimientoService
  ) { }

  ngOnInit() {
    this.movimientoForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      countryOfOrigin: ["", [Validators.required, Validators.maxLength(100)]],
      activeYears: ["", [Validators.required, Validators.maxLength(100)]]
  })
  }

  createMovement(movimiento: Movimiento){
    this.movimientoService.createMovement(movimiento).subscribe(movimiento=>{
    console.info("El movimiento ha sido creado: ", movimiento)
    this.toastr.success("Confirmación", "Movimiento creado")
    this.movimientoForm.reset();
  })
  }

  cancelCreation(){
    this.movimientoForm.reset();
  }
}
