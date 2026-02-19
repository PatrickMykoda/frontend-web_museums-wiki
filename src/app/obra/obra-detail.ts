import { Artista } from "../artista/artista";
import { Obra } from "./obra";
import { Imagen } from "./imagen";
import { Museo } from "../museo/museo";

export class ObraDetail extends Obra {

  images: Array<Imagen> = [];
  museum: Museo;

  constructor(id: number,
    name: string,
    year: number,
    description: string,
    type: string,
    mainImage: string,
    artist: Artista,
    images: Array<Imagen>,
    museum: Museo,
    ){
    super(id, name, year, description, type, mainImage, artist)
    this.images = images;
    this.museum = museum;
  }
}
