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
import { NgForm,FormBuilder, FormGroup, Validators, FormControl, AbstractControl,FormGroupDirective,RadioControlValueAccessor } from '@angular/forms';

import swal from 'sweetalert2';
import {NgControl} from '@angular/forms';
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
export class SuperdashboardComponent implements OnInit,AfterViewInit {
  constructor(private route: ActivatedRoute, private https: HttpClient,
    private formBuilder: FormBuilder,  private router: Router, private http: Http, private pagerService: PagerService, private homeService: HomeService,
     private sg: SimpleGlobal, private obj: HomeService, private dialog: MatDialog, private dataa: DataService, private superuserservice: SuperuserService) {

}
// private newService: DeleteService,private serve:EditService,

// array of all items to be paged
// pager object
pageSizeOptions;

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
 
modal:any=[];
editdata: any = [];
result3:any=[];

// setPage(username,page: number) {
//     // alert("username")
//     //  console.log("usernameeeeeeeeeeeee",username)

//     const Results = {};
  
//     this.superuserservice.searchProduct(username,page).subscribe(Response => {
//         // console.log(Response.id);
//         // this.id = Response.id;
//         console.log('service');       // localStorage.setItem('products',response['Results']);
//         this.sg['products'] = Response['Results'];
//         this.editdata=Response['Results'];
//         console.log(this.sg['products']);
//         for (let prod of this.sg['products']) {
//             this.id = prod["id"];
//             console.log(prod["id"])
//             //console.log(prod["plan_information"])
//             //console.log(prod["price_rate"])
//             prod["plan_information"] = prod["plan_information"].split(',,', 3000);
//             prod["price_rate"] = prod["price_rate"].split('..', 3000);

//         }

//         this.dataa.changeProducts(this.sg['products']);
//         this.prod_loaded = true;
//         this.prods_loaded = true;
//         this.allItems = this.sg['products'];
//         // console.clear()
//         console.log(Response['Total Result']);
//          this.pager = this.pagerService.getPager(Response['Total Result'], page, 10);
//         //this.setPage(1);
//         // initialize to page 1
//         // console.log(this.sg['products']);

//     });
//     //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
// }
data;
public username;

dataId = '';
list = 'Hello';



 
private Sub: Subscription;
form;
updataForm : FormGroup;
 ngOnInit() {
   // this.showresult();

    this.premiseIdData();
   //alert(  this.premiseIdData())

}

premiseIdData() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get('http://192.168.30.52:9000/choice/dashboard/', { headers: headers })    .subscribe(Res => {
            console.log(Res);

        
         this. data = Res.json()['Results'];
           // this.data.changeProducts(this.sg['products']);
            // for (let prod of this.sg['products']) {
            //     // console.log(prod["plan_information"])
            //     // console.log(prod["price_rate"])
            //     prod["plan_information"] = prod["plan_information"].split(',,', 3000);
            //     prod["price_rate"] = prod["price_rate"].split('..', 3000);
            //   }


           
        });
}
ngAfterViewInit() {
    const breakCards = true;
    if (breakCards === true) {
        // We break the cards headers if there is too much stress on them :-)
        $('[data-header-animation="true"]').each(function () {
            const $fix_button = $(this);
            const $card = $(this).parent('.card');
            $card.find('.fix-broken-card').click(function () {
                const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                $header.removeClass('hinge').addClass('fadeInDown');

                $card.attr('data-count', 0);

                setTimeout(function () {
                    $header.removeClass('fadeInDown animate');
                }, 480);
            });

            $card.mouseenter(function () {
                const $this = $(this);
                const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                $this.attr('data-count', hover_count);
                if (hover_count >= 20) {
                    $(this).children('.card-header, .card-image').addClass('hinge animated');
                }
            });
        });
    }
}

}
