import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class SviewapartnerService {


username;
  constructor(private https: Http) {}
id;

  searchProduct(username,page) {

  //http://192.168.30.52:9000/choice/dashboard/
    return this.https.get('http://192.168.30.52:9000/choice/dashboard/' ) .map((response: Response)  => response.json() );
 // return this.https.get('http://192.168.30.52:9000/choice/mydata/'+ username + '/').map((response: Response) => response.json());

    }
    Superuser() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.https.get('http://192.168.30.52:9000/choice/dashboard/', {headers:headers}).map((response: Response) => response.json());
    }
    
}


