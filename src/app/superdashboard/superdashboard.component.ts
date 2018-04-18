import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from "../company.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";

import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';

import { HomeService } from "../home/home.service";
import { PagerService } from '../pager.service';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
// import { DeleteService } from './delete.service';
import { DataService } from '../data.service';
// import { EditService } from './edit.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, RadioControlValueAccessor } from '@angular/forms';

import swal from 'sweetalert2';
import { NgControl } from '@angular/forms';
import { SuperuserService } from './superuser.service';
import { SuperupdateService } from './superupdate.service';
// import { SuperuserService } from './superuser.service';



declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

declare const $: any;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }


}



@Component({
    selector: 'app-superdashboard',
    templateUrl: './superdashboard.component.html',
    styleUrls: ['./superdashboard.component.scss']
})
export class SuperdashboardComponent implements OnInit {
    constructor(private route: ActivatedRoute, private https: HttpClient,
        private formBuilder: FormBuilder, private router: Router, private http: Http, private pagerService: PagerService,
        private sg: SimpleGlobal, private serve:SuperupdateService,private obj: SuperuserService, private dialog: MatDialog, private dataa: DataService, private superuserservice: SuperuserService) {

    }
    
    // pageSizeOptions;

    private allItems: any[];
    pager: any = {};
    home: any = {};
    id: number;
    page: any[];

    // paged items
    pagedItems: any[];
    private sub: Subscription;
    private zip: any;
    prod_loaded = false;
    prods_loaded = false;
    localVar;
    public products: any;
    rating;
    closeResult: string;

    modal: any = [];
    editdata: any = [];
    result3: any = [];
     
data;
// public username;
dataId = '';
list = 'Hello';



 
private Sub: Subscription;
form;
updataForm: FormGroup;
ngOnInit() {
    // this.showresult();
  //  this.setPage(1);
    this.premiseIdData(1);
   // alert(this.premiseIdData(1))

}
catagoryId="";
zipcode="";
utilityarea="";
username="";
password="";
phone="";
state="";
email="";
country="";
status="";



btnEditClick(id,val1,val2,val3,val4,val5,val6,val7,val8,val9) {
    this.catagoryId = id;
    this.zipcode=val1;
    this.utilityarea=val2;
    this.username=val3;
    this.password=val4;
    this.phone=val5;
    this.state=val6;
    this.email=val7;
    this.country=val8;
    this.status=val9;
    
   
    console.log(val1,val2,val3,val4,val5,val6,val7,val8,val9)
    console.log('id : ' + this.catagoryId );
}

//Event Binding of PopUp Delete Modal

editClick(updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus) {
    console.log('edit' +updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus);
console.log("TS OBJECT",updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus);
    //Calling Delete Service
    this.serve.editTodoList( this.catagoryId,updatedzipcode,updatedutilityarea,updatedusername,updatedphone,updatedstate,updatedemail,updatedcountry,updatedstatus).subscribe(data => {
        console.log(data);
        swal({
            type: 'success',
            title: 'Updated Your Profile',
            showConfirmButton: false,
            timer: 1500
            
          })
          this.premiseIdData(1);
        // this.route.params.subscribe(params => {


        //     //  console.log('paramsssssssssss',params['username'])
        //     this.setPage(params['username'],1)
        //     //  this.setPage(1)

        // });
        // //  alert("junaid");
        // // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
        // // this.data.currentProducts
        // this.Sub = this.route.params.subscribe(params => {
        //     this.username = +params['username'];
        //     //  this.setPage(1)
        //     // alert(this.username);
        // });

    }, error => {
    });
  //  window.location.reload();

}
premiseIdData(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get('http://192.168.30.193:9000/choice/dashboard/' + '?page=' + page, { headers: headers }).subscribe(Res => {
        console.log(Res);
        this.pager = this.pagerService.getPager(Res['Results'], page, 10);

        this.data = Res.json()['Results'];

         


    });
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
