import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Obra } from '../obra';
import { ObraService } from '../obra.service';
import { ArtistaService } from 'src/app/artista/artista.service';
import { ArtistaDetail } from 'src/app/artista/artista-detail/artista-detail';

@Component({
  selector: 'app-obra-create',
  templateUrl: './obra-create.component.html'
})
export class ObraCreateComponent implements OnInit {

  obraForm!: FormGroup;
  artistas: Array<ArtistaDetail> = [];
  artistaId!: string;
  // enum ARTWORK_TYPE {
  //   PAINTING = 'Painting',
  //   SCULPTURE = 'Sculpture',
  //   OBJECT = 'Object'
  // };

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private obraService: ObraService,
    private ArtistaService: ArtistaService) { }

  ngOnInit() {
    this.getArtistas();
    this.obraForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      year: [ Validators.required, Validators.pattern("^[0-9]*$")],
      type: ["", Validators.required],
      artist: ["",Validators.required]
    })
  }

  createObra(obra: Obra){
    this.artistaId = this.obraForm.controls.artist.value;
    this.obraService.createObra(this.artistaId,obra).subscribe((obra: any)=>{
      console.info("La obra ha sido creada: ", obra)
      this.toastr.success("Confirmación", "Obra creada")
      this.obraForm.reset();
    });
  }

  cancelCreation(){
    this.obraForm.reset();
  }

  getArtistas() {
    this.ArtistaService.getArtistas().subscribe({next: artistas =>
      this.artistas = artistas, error: e => console.error(e)});
  }
}
