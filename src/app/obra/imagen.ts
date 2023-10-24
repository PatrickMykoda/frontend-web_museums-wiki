export class Imagen {
  id: number;
  source: string;
  altText: string;
  height: number;
  width: number;

  constructor(
    id: number,
    source: string,
    altText: string,
    height: number,
    width: number,

  ) {
    this.id = id;
    this.source = source
    this.altText = altText;
    this.height = height;
    this.width = width;
  }
 }
