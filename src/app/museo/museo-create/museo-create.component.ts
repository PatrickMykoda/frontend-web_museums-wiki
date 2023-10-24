import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Museo } from '../museo';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo-create',
  templateUrl: './museo-create.component.html'
})
export class MuseoCreateComponent implements OnInit {

  museoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museoService: MuseoService
  ) { }

  ngOnInit() {
    this.museoForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      image: ["", Validators.required]
  })

}

  createMuseo(museo: Museo){
    this.museoService.createMuseo(museo).subscribe(museo=>{
    console.info("El museo ha sido creado: ", museo)
    this.toastr.success("Confirmación", "Museo creado")
    this.museoForm.reset();
  });
}

  cancelCreation(){
    this.museoForm.reset();
}

}
