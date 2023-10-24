import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SponsorDetail } from 'src/app/sponsor/sponsor-detail';
import { SponsorService } from 'src/app/sponsor/sponsor.service';
import { ExhibicionService } from '../exhibicion.service';
import { MuseoDetail } from '../../museo/museo-detail/museo-detail';
import { MuseoService } from 'src/app/museo/museo.service';
import { ExhibicionDetail } from '../exhibicion-detail';

@Component({
  selector: 'app-exhibicion-create',
  templateUrl: './exhibicion-create.component.html'
})
export class ExhibicionCreateComponent implements OnInit {

  exhibicionForm!: FormGroup;
  sponsors: Array<SponsorDetail> = [];
  sponsorId!: string;
  museumId!: string;
  museums: Array<MuseoDetail> = [];


  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exhibicionService: ExhibicionService,
    private sponsorService: SponsorService,
    private museumService: MuseoService
  ) { }

  ngOnInit() {
    this.getSponsors();
    this.getMuseos();
    this.exhibicionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      sponsor: ["", [Validators.required]],
      museum: ["", [Validators.required]]
  })

}

  createExhibicion(exhibicion: ExhibicionDetail){
    this.sponsorId = this.exhibicionForm.controls.sponsor.value;
    this.museumId = this.exhibicionForm.controls.museum.value;
    this.exhibicionService.createExhibicion(this.museumId, exhibicion).subscribe((exhibicion: any)=>{
    console.info("La exhibicion ha sido creada: ", exhibicion)
    this.toastr.success("Confirmación", "exhibicion creada")
    this.exhibicionForm.reset();
  });
}

  cancelCreation(){
    this.exhibicionForm.reset();
}

  getSponsors() {
    this.sponsorService.getSponsors().subscribe({next: sponsors =>
    this.sponsors = sponsors, error: e => console.error(e)});
}

  getMuseos() {
    this.museumService.getMuseos().subscribe({next: museums =>
    this.museums = museums, error: e => console.error(e)});
}


}











