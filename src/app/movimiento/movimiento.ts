export class Movimiento {
  id: number;
  name: string;
  description: string;
  countryOfOrigin: string;
  activeYears: string;

  constructor(id: number, name: string, description: string, countryOfOrigin: string, activeYears: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.countryOfOrigin = countryOfOrigin;
    this.activeYears = activeYears;
  }
}
