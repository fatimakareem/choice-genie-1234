
import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
 


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent implements OnInit {

  state;
  city;
  username;
  confirmpassword;
  signupForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;


  constructor(public router: Router, private fb: FormBuilder,  private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() {
    this.states();

    // this.city();
    this.signupForm = this.fb.group({
      'fname': ['', Validators.compose([Validators.required])],
      'lname': ['', Validators.compose([Validators.required])],

      // 'zipcode': ['', Validators.compose([Validators.required, , Validators.pattern(this.digitsOnly)])],
      // 'utilityarea': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],
      'username': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)])],
      'phone': ['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
      'dob': ['', Validators.compose([Validators.required])],
      'state': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'country': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'city': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],

    });
  }

  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
  }

  email1;
  emailexist1() {
    // alert(this.premiseID.toString().length)
    //  alert('hello');
    console.log("CHocie Genie",this.model.email);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.get(Config.api + 'email_exist/'+this.model.email, { headers: headers })
 
      .subscribe(data => {
        console.log(data);

        this.email1=data;

        console.log(this.model.email);
       

        
      });
  }
  usernameexist;
  userexist() {
    //alert('hello');
    console.log("CHOICE GENIE", this.model.username);
    
    let headers = new HttpHeaders();
    
    
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get(Config.api +'usernameexist/'+ this.model.username +'/', { headers: headers })
    
    
    //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
    .subscribe(data => {
    console.log(data);
    // this.next = Res[0].next;
    this.usernameexist=data
    console.log(this.model.username);
    
    },
    error => {
    console.log(error);
    //  this.toastr.error(error, null, {toastLife: 5000});
    swal(
    'Invalid',
    'User Already Exist! or May be Some Error!',
    'error'
    )
    
    });
    }
  states() {
    // alert(this.premiseID.toString().length)
    //  alert('hello');
    // if(this.premiseID&&this.premiseID.toString().length===17) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.get(Config.api + 'state/', { headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
        console.log(Res);
        //     this.state= Res[0].state;
        //  Res[0].state=this.model;
        this.state = Res;        
      });
  }
  cities() {
    // alert(this.premiseID.toString().length)
    //  alert('hello');


    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get(Config.api + 'city/' + this.model.state + '', { headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
        console.log(Res);
        //  this.sQuestion = Res[0].sQuestion;
        // this.state = Res[0].state;
        this.city = Res;

      });
  }
  Email() {

    console.log("CHOICE GENIE", this.model);

    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.http.post(Config.api+'authenticade_code/',JSON.stringify(this.model.email) + '', { headers: headers })


      .subscribe(Res => {
        console.log(Res);
        console.log(this.model.email);


      });

  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      // console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  signupuserdata() {
    //alert('hello');
    
    console.log("CHOICE GENIE", this.model);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(Config.api + 'userregister/', this.model, { headers: headers })
      .subscribe(Res => {
        console.log(Res);
        console.log(this.model);
        swal({
          text: "Register Successflluy!",
          title: "Choice Genie",
          type: "success",
          showConfirmButton: false,
          //     confirmButtonColor: "#DD6B55",
          timer: 1200,
          confirmButtonText: "OK",

        })

      //  this.router.navigate(['/userlogin'])
      },
        error => {
          this.validateAllFormFields(this.model);
          console.log(error);
         
          //     //    this.state = Res[0].state;
          //     //this.sg['products'] = Res.json()['Results'];
          //     //this.data.changeProducts(this.sg['products']);
          //   f.resetForm();
        });
     
  }


}
