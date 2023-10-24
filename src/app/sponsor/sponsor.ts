export class Sponsor {
  id: number;
  name: string;
  description: string;
  website: string;

  constructor(
    id: number,
    name: string,
    description: string,
    website: string,
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.website = website;
  }
}
