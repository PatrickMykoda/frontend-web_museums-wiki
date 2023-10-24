import { Component, Input, OnInit } from '@angular/core';
import { ArtistaDetail } from './artista-detail';
import { ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-detail',
  templateUrl: './artista-detail.component.html'
})
export class ArtistaDetailComponent implements OnInit {

  artistaId!: string;
  @Input() artistaDetail!: ArtistaDetail;

  constructor(
    private route: ActivatedRoute,
    private artistaService: ArtistaService
  ) { }

  getArtista(){
    this.artistaService.getArtista(this.artistaId).subscribe({next: artista=>
      this.artistaDetail = artista,error: e => console.error(e)});
  }



  ngOnInit() {
    if(this.artistaDetail === undefined){
      this.artistaId = this.route.snapshot.paramMap.get('id')!
      if (this.artistaId) {
        this.getArtista();
      }
    }
  }
}

