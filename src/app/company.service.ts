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
    //let headers = new Headers({'Authorization': 'JWT ' + username.token});
<<<<<<< HEAD
    //let headers = new Headers();
  let headers = new Headers();
   
=======
    let headers = new Headers();
>>>>>>> 6a9bd9bc2c97cd88d9f2c6c20de42b176c9110b5
  // headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Headers', 'Content-Type');
  // headers.append('Access-Control-Allow-Methods', 'GET');
    return this.https.get(Config.api +'mydata/'+ username +'/'+'?page='+page, {headers: headers} ) .map((response: Response)  => response.json() );
 // return this.https.get('http://192.168.30.52:9000/choice/mydata/'+ username + '/').map((response: Response) => response.json());

    }
}


