import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {



  constructor(private https: Http) {
}
id;
username;
  searchProduct(username,page) {
    console.log(username)
<<<<<<< HEAD
    //let headers = new Headers({'Authorization': 'JWT ' + username.token});
    let headers = new Headers();
=======
  let headers = new Headers();
   
>>>>>>> fb68daccbcd40f0d520b92ffbaa3817015bae1e7
  // headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Headers', 'Content-Type');
  // headers.append('Access-Control-Allow-Methods', 'GET');
    return this.https.get(Config.api +'mydata/'+ username +'/'+'?page='+page, {headers: headers} ) .map((response: Response)  => response.json() );
 // return this.https.get('http://192.168.30.52:9000/choice/mydata/'+ username + '/').map((response: Response) => response.json());

    }
}


