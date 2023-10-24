import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-create',
  templateUrl: './artista-create.component.html'
})
export class ArtistaCreateComponent implements OnInit {

 artistaForm!: FormGroup;

 constructor(
   private formBuilder: FormBuilder,
   private toastr: ToastrService,
   private artistaService: ArtistaService
 ) { }

 ngOnInit() {
  this.artistaForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    birthplace: ["", [Validators.required]],
    birthdate: ["", Validators.required],
    image: ["", Validators.required]
  })
 }

 createArtista(artista: Artista){
  this.artistaService.createArtista(artista).subscribe(artista=>{
  console.info("El artista ha sido creado: ", artista)
  this.toastr.success("Confirmación", "Artista creado")
  this.artistaForm.reset();
  });
}

cancelCreation(){
  this.artistaForm.reset();
}

}
