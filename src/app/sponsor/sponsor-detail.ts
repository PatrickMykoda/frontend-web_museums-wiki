import { Sponsor } from "./sponsor";
import { Exhibicion } from "../exhibicion/exhibicion";

export class SponsorDetail extends Sponsor{

  exhibicions: Array<Exhibicion>;

  constructor(
    id: number,
    name: string,
    description: string,
    website: string,
    exhibicions: Array <Exhibicion>
  ) {
    super(id, name, description, website)
    this.exhibicions = exhibicions;
  }
}
