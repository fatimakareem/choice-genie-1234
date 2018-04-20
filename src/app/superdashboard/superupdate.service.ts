import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class SuperupdateService {

  constructor(private http: Http) { }
  

editTodoList(id,updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus) {
  console.log('Approve user');
  console.log(" service object",id,updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // return this.http.put('http://192.168.30.193:9000/choice/dashboardstatus/'+ id , JSON.stringify({
  return this.http.put(Config.api +'dashboardstatus/'+ id , JSON.stringify({
 // return this.http.put(Config.api+'dataup/'+ id , JSON.stringify({
   
    "id": id,
    "zipcode": updatedzipcode,
    "utilityarea": updatedutilityarea,
    "username": updatedusername,
   
    "Phone": updatedphone,
    "state": updatedstate,
    "email": updatedemail,
    "country": updatedcountry,
    "status": updatedstatus
 
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
