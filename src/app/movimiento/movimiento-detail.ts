import { Artista } from "../artista/artista";
import { Movimiento } from "./movimiento";

export class MovimientoDetail extends Movimiento {

  artists: Array<Artista> = [];

  constructor(
    id: number,
    name: string,
    description: string,
    countryOfOrigin: string,
    activeYears: string,
    artists: Array<Artista>
  ) {
    super(id, name, description, countryOfOrigin, activeYears)
    this.artists = artists;
  }
}
