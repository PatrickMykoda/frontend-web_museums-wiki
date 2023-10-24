import { Exhibicion } from "src/app/exhibicion/exhibicion";
import { Obra } from "src/app/obra/obra";

export class MuseoDetail {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: string;
  artworks: Array<Obra>;
  exhibitions: Array<Exhibicion>;

  constructor(
  id: number,
  name: string,
  description: string,
  address: string,
  city: string,
  image: string,
  artworks: Array<Obra>,
  exhibitions: Array<Exhibicion>
  )
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.image = image;
    this.artworks = artworks;
    this.exhibitions = exhibitions;
  }
}
