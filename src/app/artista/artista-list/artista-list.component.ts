import { Component, OnInit } from '@angular/core';
import { ArtistaDetail } from '../artista-detail/artista-detail';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {
  selectedArtista!: ArtistaDetail;
  selected: boolean = false;
  artistas: Array<ArtistaDetail> = [];
  constructor(private ArtistaService: ArtistaService) { }

  onSelected(artista: ArtistaDetail): void {
    this.selected = true;
    this.selectedArtista = artista;
  }

  getArtistas() {
    this.ArtistaService.getArtistas().subscribe({next: artistas =>
      this.artistas = artistas, error: e => console.error(e)});
  }

  ngOnInit() {
    this.getArtistas();
  }
}
