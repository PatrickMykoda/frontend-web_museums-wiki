import { Component, OnInit } from '@angular/core';
import { SponsorService } from '../sponsor.service';
import { SponsorDetail } from '../sponsor-detail';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css']
})
export class SponsorListComponent implements OnInit {

  selected: Boolean = false;
  selectedSponsor!: SponsorDetail;
  sponsors: Array<SponsorDetail> = [];
  constructor(private sponsorService: SponsorService) { }

  getSponsors(): void {
    this.sponsorService.getSponsors().subscribe((sponsors) => {
      this.sponsors = sponsors;
    });
  }

  onSelected(sponsor: SponsorDetail): void {
    this.selected = true;
    this.selectedSponsor = sponsor;
  }

  ngOnInit(): void {
    this.getSponsors();
  }

}
