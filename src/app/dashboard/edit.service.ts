import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class EditService {

  constructor(private http: Http) { }
  

editTodoList(id,updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl) {
  
  console.log(" service object",id,updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(Config.api+'dataup/'+ id , JSON.stringify({
   
    "cancelation_fee":updatedcancelation_fee,
    "fact_sheet":updatedfact_sheet,
    "phone":updatedphone, 
    "plan_information":updatedplan_information,
    "price_rate":updatedprice_rate,
    "profile_logo":updatedprofile_logo,
    "profileurl":updatedprofileurl,
    "rating_logo":updatedrating_logo,
    "sign_up":updatedsign_up,
    "terms_of_service":updatedterms_of_service,
    "title":updatedtitle
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
