import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
// import {ContactUsService} from "./contact-us.service";
import { AgmCoreModule } from '@agm/core';
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
  selector: 'app-com-profile',
  templateUrl: './com-profile.component.html',
  styleUrls: ['./com-profile.component.scss']
})
export class ComProfileComponent implements OnInit {
public username;
data:any=[];
  constructor(private https:Http,public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() { this.username = localStorage.getItem('username');
  this.fetchzip()
  }
  fetchzip() {
    // this.route.params.subscribe(params => {
    //   let zip =  this.sg['product_zipcode'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get('http://192.168.30.41:9000/comprofile/' + this.username + '/', { headers: headers })
    
    .subscribe(Res => {
    this.data=Res.json();
    console.log(this.data);
    });
    
    }
}