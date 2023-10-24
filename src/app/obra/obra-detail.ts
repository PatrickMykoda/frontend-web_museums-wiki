import { Artista } from "../artista/artista";
import { Obra } from "./obra";
import { Imagen } from "./imagen";

export class ObraDetail extends Obra {

  images: Array<Imagen> = [];

  constructor(id: number,
    name: string,
    year: number,
    description: string,
    type: string,
    mainImage: string,
    artist: Artista,
    images: Array<Imagen>
    ){
    super(id, name, year, description, type, mainImage, artist)
    this.images = images;
  }
}
