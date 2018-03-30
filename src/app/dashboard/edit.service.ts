import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class EditService {

  constructor(private http: Http) { }
  

editTodoList(obj) {
  console.log('mmmmmmmmmmmmmmmmmmmmm');
  console.log(obj)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put('http://192.168.30.41:9000/choice/dataup/'+ obj.id , JSON.stringify({
    "zipcode":obj.zipcode,
    "cancelation_fee":obj.cancelation_fee,
    "fact_sheet":obj.fact_sheet,
    "phone":obj.phone, 
    "id":obj.id,
    "plan_information":obj.plan_information,
    "price_rate":obj.price_rate,
    "profile_logo":obj.profile_logo,
    "profileurl":obj.profileurl,
    "rating_logo":obj.rating_logo,
    "sign_up":obj.sign_up,
    "terms_of_service":obj.terms_of_service,
    "title":obj.title,
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
