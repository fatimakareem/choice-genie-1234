import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
import {HttpService} from '../serv/http-service';
@Injectable()
export class HomeService {

  months:any[];
  constructor(private http: HttpService) { }

  searchProducts(id,page) {
    console.log(id)
    // return this.http.get(Config.api + '/zipcodedata/' + id +'?page='+page +'/').map((response: Response) => response.json());

   return this.http.get('http://192.168.30.193:9000/choice/zipcodedata/' + id +'?page='+page +'/').map((response: Response) => response.json());
   // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
  }
}
 