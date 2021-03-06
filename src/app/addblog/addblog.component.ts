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
  result: any = [];
  url: any = 'JPG, GIF, PNG';
  Ch_image;

  constructor(private _serv: LoginService, public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

 

  ngOnInit() {
    this.signupForm = this.fb.group({
      'Ch_image':['', Validators.compose([Validators.required])],
      'heading1': ['', Validators.compose([Validators.required])],
      'content1': ['', Validators.compose([Validators.required])],  
      'heading2': ['', Validators.compose([Validators.required])],
      'content2': ['', Validators.compose([Validators.required])],  
      'heading3': ['', Validators.compose([Validators.required])],
      'content3': ['', Validators.compose([Validators.required])],  
      'heading4': ['', Validators.compose([Validators.required])],
      'content4': ['', Validators.compose([Validators.required])], 
      'heading5': ['', Validators.compose([Validators.required])],
      'content5': ['', Validators.compose([Validators.required])],     
      'heading6': ['', Validators.compose([Validators.required])],
      'content6': ['', Validators.compose([Validators.required])],    
  
    });
    }
    // onChange(event) {
    //   this.Ch_image = event.target.files[0];
    // }
    onChange(event: EventTarget) {
      this.Ch_image = new FormData();
      const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
      const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
      this.Ch_image.append('fileToUpload', target.files[0]);
      console.log(this.Ch_image);
      alert(this.Ch_image);
    }
    
  
    readUrl(event: any) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          this.url = e.target.result;
          console.log(this.url);
        };
        // this.img=this.url;
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    upload(){
      alert('Image Object ' + this.Ch_image);

this.http.post(
Config.Imageurlupload,
this.Ch_image, {responseType: 'text'}).subscribe(data => {
if(data==="Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.")
{
// EditCourseDialogComponent.ImageUploadFailer();
// this.CourseFailure();
}
else {

// this.CourseSuccess();
// this.course_image = data;
// alert(this.course_image);
//              this.ifImageUpload();            }
console.log(data);
alert(data);
this.model.Ch_image = data;
// this.model.course_content = data;
this.signupuserdata();
}
});



    }

    signupuserdata() {
      //alert('hello');
      //console.log("main form",this.signupForm.value)
      console.log("CHOICE GENIE", this.model.Ch_image);
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      this.http.post( 'http://192.168.30.41:9000/postingblog/', this.model, { headers: headers })
        .subscribe(Res => {
          console.log(Res);
          console.log(this.model);
          swal({
            text: "Blogs Save  Successflluy!",
            title: "Choice Genie",
            type: "success",
            showConfirmButton: false,
            //     confirmButtonColor: "#DD6B55",
            timer: 1200,
            confirmButtonText: "OK",
  
          })
          //  f.resetForm();
           
        },
          error => {
            //this.validateAllFormFields(this.model);
            console.log(error);
  
           
            //   f.resetForm();
          });
  
    }
  

}
