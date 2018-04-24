import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class SuperupdateService {

  constructor(private http: Http) { }
   // item.id,item.zipcode,item.utilityarea,item.title,item.Phone,item.state,item.country,item.status,item.user

editTodoList(id,updatedzipcode,updatedutilityarea,updatedtitle,updatedphone,updatedstate,updatedcountry,updatedstatus,updateduser) {
  console.log('Approve user');
  console.log(" service object",id,updatedzipcode,updatedutilityarea,updatedtitle,updatedphone,updatedstate,updatedcountry,updatedstatus,updateduser)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // return this.http.put('http://192.168.30.193:9000/choice/dashboardstatus/'+ id , JSON.stringify({
  return this.http.put(Config.api +'dashboardstatus/'+ id , JSON.stringify({
 // return this.http.put(Config.api+'dataup/'+ id , JSON.stringify({
   
   
    "zipcode": updatedzipcode,
    "utilityarea": updatedutilityarea,
    "title":updatedtitle,   
    "Phone": updatedphone,
    "state": updatedstate, 
    "country": updatedcountry,
    "status": updatedstatus,
    "user":updateduser
 
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
