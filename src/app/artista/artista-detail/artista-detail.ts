import { Movimiento } from "src/app/movimiento/movimiento";
import { Obra } from "src/app/obra/obra";
import { Artista } from "../artista";

export class ArtistaDetail extends Artista {
  movements: Array<Movimiento>;
  artworks: Array<Obra>;

 constructor(
   id: number,
   name: string,
   birthplace: string,
   birthdate: string,
   image: string,
   movements: Array<Movimiento>,
   artworks: Array<Obra>
 ) {
   super(id, name, birthplace, birthdate, image)
   this.movements = movements;
   this.artworks = artworks;
 }
}
