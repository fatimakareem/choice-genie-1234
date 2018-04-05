import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class SuperuserService {

  months:any[];
username;
  constructor(private https: Http) {}
id;

searchProducts(page) {
  console.log(page)
 // return this.http.get(Config.api+'data_against_zipcode/' + id +'?page='+page).map((response: Response) => response.json());
   return this.https.get('http://192.168.30.52:9000/choice/dashboard/'+'?page='+page).map((response: Response) => response.json());
}
    
}
//http://192.168.30.52:9000/choice/dashboard/?page=2
 
   

 
 



