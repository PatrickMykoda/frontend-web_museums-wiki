import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Sponsor } from '../sponsor';
import { SponsorService } from '../sponsor.service';


@Component({
  selector: 'app-sponsor-create',
  templateUrl: './sponsor-create.component.html'
})
export class SponsorCreateComponent implements OnInit {

  sponsorForm!: FormGroup;
  urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private sponsorService: SponsorService
  ) { }

  ngOnInit() {
    this.sponsorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      website: ["", [Validators.required, Validators.pattern(this.urlRegEx)]]
  })
  }

  createSponsor(sponsor: Sponsor){
    this.sponsorService.createSponsor(sponsor).subscribe(sponsor=>{
    console.info("The sponsor was created: ", sponsor)
    this.toastr.success("Confirmation", "Sponsor created")
    this.sponsorForm.reset();
  })
  }

  cancelCreation(){
    this.sponsorForm.reset();
 }
}
