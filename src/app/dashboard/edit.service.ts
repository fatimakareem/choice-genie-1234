import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class EditService {

  constructor(private http: Http) { }
  

editTodoList(id) {
  console.log('mmmmmmmmmmmmmmmmmmmmm');
  console.log(id)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(Config.api + 'dataup/'+ id , JSON.stringify({
    "zipcode":id.zipcode,
    "cancelation_fee":id.cancelation_fee,
    "fact_sheet":id.fact_sheet,
    "phone":id.phone, 
    "id":id.id,
    "plan_information":id.plan_information,
    "price_rate":id.price_rate,
    "profile_logo":id.profile_logo,
    "profileurl":id.profileurl,
    "rating_logo":id.rating_logo,
    "sign_up":id.sign_up,
    "terms_of_service":id.terms_of_service,
    "title":id.title,
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
