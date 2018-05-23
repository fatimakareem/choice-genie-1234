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
import { LoginService } from '../pages/login/login.service';
 


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  state;
  city;
  username;
  confirmpassword;
  signupForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  usernameOnly = '[a-zA-Z0-9_.]+';
  flag = true;
  date = new FormControl(new Date());
  hide=true;
  emailexist: boolean = true;
  usernameexist: boolean = true;

  constructor(private _serv: LoginService, public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

 

  ngOnInit() {
    this.signupForm = this.fb.group({
      'Name': ['', Validators.compose([Validators.required])],
      'service_zip': ['', Validators.compose([Validators.required])],

      // 'zipcode': ['', Validators.compose([Validators.required, , Validators.pattern(this.digitsOnly)])],
      // 'utilityarea': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],
      'username': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)])],
      //'username': ['', Validators.compose([Validators.required, Validators.pattern(this.usernameOnly)])],
      // username: ['', Validators.compose([Validators.required, Validators.pattern(this.usernameOnly)])],
      'phone_no': ['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
      'dob': ['', Validators.compose([Validators.required])],
  
    });
    }
  

}
