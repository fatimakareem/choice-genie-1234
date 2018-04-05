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
        private sg: SimpleGlobal, private obj: SuperuserService, private dialog: MatDialog, private dataa: DataService, private superuserservice: SuperuserService) {

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
public username;

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

premiseIdData(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get(Config.api + 'dashboard/' + '?page=' + page, { headers: headers }).subscribe(Res => {
        console.log(Res);
        this.pager = this.pagerService.getPager(Res['Results'], page, 10);

        this.data = Res.json()['Results'];

         


    });
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
