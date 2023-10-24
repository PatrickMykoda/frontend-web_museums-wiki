import { ExhibicionDetail } from "./exhibicion-detail";
import { Obra } from "src/app/obra/obra";

export class ExhibicionMuseoDetail {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  image: string;
  artworks: Array<Obra>;
  exhibitions: Array<ExhibicionDetail>;

  constructor(
  id: number,
  name: string,
  description: string,
  address: string,
  city: string,
  image: string,
  artworks: Array<Obra>,
  exhibitions: Array<ExhibicionDetail>
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
