import { Exhibicion } from "./exhibicion";
import { MuseoDetail } from "../museo/museo-detail/museo-detail";
import { ObraDetail } from "../obra/obra-detail";

export class ExhibicionDetail extends Exhibicion {
 sponsor: {};
 museum: MuseoDetail;
 obras: Array<ObraDetail> = [];


 constructor(
  id: number,
  name: string,
  description: string,
  sponsor: {},
  museum: MuseoDetail,
  obras: Array<ObraDetail>
 ) {
   super(id, name, description)
   this.sponsor = sponsor;
   this.museum = museum;
   this.obras = obras;
 }
}
