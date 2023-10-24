import { Component, OnInit, Input } from '@angular/core';
import { SponsorDetail } from '../sponsor-detail';
import { ActivatedRoute } from '@angular/router';
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html'
})
export class SponsorDetailComponent implements OnInit {

  sponsorId!: string;
  @Input() sponsorDetail!: SponsorDetail;

  constructor(
    private route: ActivatedRoute,
    private sponsorService: SponsorService
  ) { }

  getSponsor(){
    this.sponsorService.getSponsor(this.sponsorId).subscribe(sponsor=>{
      this.sponsorDetail = sponsor;
    })
  }

  ngOnInit() {
    if(this.sponsorDetail === undefined){
      this.sponsorId = this.route.snapshot.paramMap.get('id')!
      if (this.sponsorId) {
        this.getSponsor();
  }
}
}
}
