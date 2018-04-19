import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {ErrorStateMatcher, MatStepper} from '@angular/material';

import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
 import swal from 'sweetalert2'; 
import { MatSelect } from '@angular/material';
import { PasswordValidation } from './password-validator.component';

@Component({
  selector: 'app-forget_password',
  templateUrl: './forget_password.component.html',
  styleUrls: ['./forget_password.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
    private sg: SimpleGlobal) { }
    pass1;
    pass2;
    qurey;
    sub;
  
  ngOnInit() {
   
  
  
    this.route.params.subscribe(params => {
this.qurey=params['qurey']

       console.log('paramsssssssssss',this.qurey)
     
      console.log(params['qurey'],1)
      

  });
    this.sub = this.route.params.subscribe ( params => {
      console.log('params',params['query'])
     // this.forgetpass(params['query']) 
        });
  }
  forgetpass(qurey) {
    //alert('hello');
   console.log(qurey,"ffffffffffffffffff")

    let headers = new HttpHeaders();


    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post(Config.api +'reset_password/', {'pass1':this.pass1,
    'pass2':this.pass2,
    'code': this.qurey
  }, { headers: headers })


      //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
      .subscribe(Res => {
      
        console.log(Res);
        // this.next = Res[0].next;

      
       
      },
        error => {
          console.log(error);
        //  this.toastr.error(error, null, {toastLife: 5000});
          swal(
            'Invalid',
            'May be Some error!',
            'error'
          )

          //     //    this.state = Res[0].state;
          //     //this.sg['products'] = Res.json()['Results'];
          //     //this.data.changeProducts(this.sg['products']);
          //   f.resetForm();
        });
   


    //}


  }
}
