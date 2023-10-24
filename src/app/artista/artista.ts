//import { Movimiento } from "../movimiento/movimiento";
//import { Obra } from "../obra/obra";

export class Artista {
 id: number;
 name: string;
 birthplace: string;
 birthdate: string;
 image: string;
 //movements: Array<Movimiento>;
 //artworks: Array<Obra>;

 constructor(
  id: number,
  name: string,
  birthplace: string,
  birthdate: string,
  image: string,
  //movements: Array<Movimiento>,
//   artworks: Array<Obra>
)
{
   this.id = id;
   this.name = name;
   this.birthplace = birthplace;
   this.birthdate = birthdate;
   this.image = image;
//    this.movements = movements;
//    this.artworks = artworks;
}
}
