import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class EditreviewService {

  constructor(private http: Http) { }
  

editTodoList(id,uprate,upproid,upstatus,upzip,upcomt,upuser) {
  
  console.log(" service object",id,uprate,upproid,upstatus,upzip,upcomt,upuser)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put('http://192.168.30.193:9000/choice/reviewchangestatus/'+ id , JSON.stringify({
   
    
    
      "rate": uprate,
      "productid": upproid,
      "zipcode": upzip,
      "comment": upcomt,
      "username": upuser,
      "reviewactive": upstatus
  
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}
