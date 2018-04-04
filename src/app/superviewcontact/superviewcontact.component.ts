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
import { SuperviewcontactService } from './superviewcontact.service';
// import { SviewapartnerService } from './sviewapartner.service';


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
  selector: 'app-superviewcontact',
  templateUrl: './superviewcontact.component.html',
  styleUrls: ['./superviewcontact.component.scss']
})
export class SuperviewcontactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private https: HttpClient,
    private formBuilder: FormBuilder,  private router: Router, private http: Http, private pagerService: PagerService, private homeService: HomeService,
     private sg: SimpleGlobal, private obj: HomeService, private dialog: MatDialog, private dataa: DataService, private superuserservice: SuperviewcontactService) {

}
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

data;
public username;

dataId = '';
list = 'Hello';




 ngOnInit() {
   // this.showresult();

    this.premiseIdData();
   //alert(  this.premiseIdData())

}

premiseIdData() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get('http://192.168.30.52:9000/choice/contactfilter/', { headers: headers })    .subscribe(Res => {
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
// }
// ngAfterViewInit() {
//   const breakCards = true;
//   if (breakCards === true) {
//       // We break the cards headers if there is too much stress on them :-)
//       $('[data-header-animation="true"]').each(function () {
//           const $fix_button = $(this);
//           const $card = $(this).parent('.card');
//           $card.find('.fix-broken-card').click(function () {
//               const $header = $(this).parent().parent().siblings('.card-header, .card-image');
//               $header.removeClass('hinge').addClass('fadeInDown');

//               $card.attr('data-count', 0);

//               setTimeout(function () {
//                   $header.removeClass('fadeInDown animate');
//               }, 480);
//           });

//           $card.mouseenter(function () {
//               const $this = $(this);
//               const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
//               $this.attr('data-count', hover_count);
//               if (hover_count >= 20) {
//                   $(this).children('.card-header, .card-image').addClass('hinge animated');
//               }
//           });
//       });
//   }
// }
}
}
