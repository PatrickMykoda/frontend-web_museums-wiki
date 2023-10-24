import { Artista } from "../artista/artista";

export class Obra {
  id: number;
  name: string;
  year: number;
  description: string;
  type: string;
  mainImage: string;
  artist: Artista;

  constructor(id: number,
    name: string,
    year: number,
    description: string,
    type: string,
    mainImage: string,
    artist: Artista
    ){
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description;
    this.type = type;
    this.mainImage = mainImage;
    this.artist = artist
  }
}
