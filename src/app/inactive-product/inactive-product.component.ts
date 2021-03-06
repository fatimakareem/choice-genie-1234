import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "../home/home.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { NgForm, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
import * as _ from 'underscore';
import { PagerService } from '../pager.service';
import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';
import { EditService } from '../dashboard/edit.service';

// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
// import { SSL_OP_NO_TICKET } from 'constants';

import swal from 'sweetalert2'; 
@Component({
  selector: 'app-inactive-product',
  templateUrl: './inactive-product.component.html',
  styleUrls: ['./inactive-product.component.scss']
})
export class InactiveProductComponent implements OnInit {
  pageSizeOptions;
   
    private sub: Subscription;
    private zip: any;
    prod_loaded = false;
    prods_loaded = false;
    localVar;
    public products: any;
    rating;
    closeResult: string;
stars;
    //    setPage;
    constructor(private serve:EditService,private http: Http, private pagerService: PagerService, private homeService: HomeService, private route: ActivatedRoute, public sg: SimpleGlobal, private obj: HomeService, private router: Router, private dialog: MatDialog, private data: DataService) {

    }
    private allItems: any[];
    pager: any = {};
    home: any = {};
    private id: any[];
    page: any[];
    // paged items
    pagedItems: any[];
public zip_code;
public username;
public customer;


val;
user;
  ngOnInit() {
    this.title = localStorage.getItem('username')
        console.log(this.title,'gggggggggggggggg')
    this.username = localStorage.getItem('username');
    this.zip_code = localStorage.getItem('zip');
    this.data.currentProducts.subscribe(products => this.sg['products'] = products)
    this.data.currentProducts
    this.profile()
   
        this.setPage(this.title,1)
            console.log(this.title,1)


   
  }
  status=true;
  btnactiveClick(id,val1,val2,val3,val4,val5,val6,val12,val13,val7,val8,val9,val10,val11) {
    this.catagoryId = id;
    console.log(this.plan_information)
    this.title=val1;
    this.sign_up=val2;
    this.phone=val3;
    this.terms_of_service=val4;
    this.plan_information=val8;
    this.fact_sheet=val5;
    this.cancelation_fee=val6;
    this.price_1000_kwh=val7;
    this.price_500_kwh=val12;
this.status=true;
             this.price_2000_kwh=val13;

    this.rating_logo=val9;
    this.profile_logo=val10;
    this.profileurl=val11;
   
    console.log(id,val1,val2,val3,val4,val5,val6,val12,val13,val7,val8,val9,val10,val11)
    console.log('id : ' + this.catagoryId );
}

//Event Binding of PopUp Delete Modal

activeClick(updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl,upactive) {
    console.log('edit' +updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl,upactive);
console.log("TS OBJECT",updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl,upactive);
    //Calling Delete Service
    this.serve.editTodoList( this.catagoryId,updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl,true).subscribe(data => {
        console.log(data);
        swal({
            type: 'success',
            title: 'Successfully updated',
            showConfirmButton: false,
            timer: 1500
          })
          this.setPage(this.title,1)

    }, error => {
    });
  //  window.location.reload();

}
  profile() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get('http://192.168.30.135:9000/users_profile/' + this.username + '/', { headers: headers })
  
    .subscribe(Res => {
    this.data=Res.json();
    console.log(this.data);
    this.user=this.data['user']
    });
    
    }
    rev:any=[];
    getreview(id) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'totalreviews/'+ id , { headers: headers })
      
        .subscribe(Res => {
        this.rev=Res.json()['Total Reviews'];

        console.log(this.rev);
      
        });
        
        }
      
       avrage:any=[];
        avereview(id) {

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.get(Config.api + 'reviewsperproduct/'+id , { headers: headers })
          
            .subscribe(Res => {
            this.avrage=Res.json()['Results'];
            console.log(this.avrage);
          
            });
            
            }
            rate='';
            get(rating){
                this.rate=rating;
            }
            catagoryId = '';
            title='';
            cancelation_fee='';
                     fact_sheet='';
                     phone='';
                     plan_information='';
                     price_rate='';
                     profile_logo='';
                     profileurl='';
                     rating_logo='';
                     sign_up='';
                     terms_of_service='';
                     price_1000_kwh='';
                     price_500_kwh='';
                     price_2000_kwh='';
             //Event Binding of Delete Buttons
             btnEditClick(id,title,sign_up,phone,terms_of_service,fact_sheet,cancelation_fee,price_1000_kwh,price_500_kwh,price_2000_kwh,plan_information,rating_logo,profile_logo,profileurl) {
                 this.catagoryId = id;
               
                 console.log(this.plan_information)
                 this.title=title;
                 this.sign_up=sign_up;
                 this.phone=phone;
                 this.terms_of_service=terms_of_service;
                 this.fact_sheet=fact_sheet;
                 this.cancelation_fee=cancelation_fee;
                 this.price_1000_kwh=price_1000_kwh;
                 this.plan_information=plan_information;
                 this.rating_logo=rating_logo;
                
                 this.profile_logo=profile_logo;
                 this.profileurl=profileurl;
                 this.price_500_kwh=price_500_kwh;
                 this.price_2000_kwh=price_2000_kwh;
                 console.log(id,title,sign_up,phone,terms_of_service,fact_sheet,cancelation_fee,price_1000_kwh,price_500_kwh,price_2000_kwh,plan_information,rating_logo,profile_logo,profileurl)
                 console.log('id : ' + this.catagoryId );
             }
           
  setPage(title,page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    const Results = {}
    this.title = localStorage.getItem('username');
    this.obj.inactiveproduct(title, page).subscribe(response => {
        // localStorage.setItem('products',response['Results']);


        this.sg['products'] = response['Results'];
       
        for (let prod of this.sg['products']) {
            //console.log(prod["plan_information"])
            //console.log(prod["price_rate"])
            prod["plan_information"] = prod["plan_information"].split(',,', 3000);
            prod["price_rate"] = prod["price_rate"].split('..', 3000);

        }

         this.data.changeProducts(this.sg['products']);
        this.prod_loaded = true;
        this.prods_loaded = true;
        this.allItems = this.sg['products'];
        //  this.allItems = this.sg['products'];
        //console.clear()
        // console.log(response['Total Result']);
        this.pager = this.pagerService.getPager(response['Total Result'], page, 10);

        //this.setPage(1);
        // initialize to page 1
        // console.log(this.sg['products']);

    }


    );


    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

}
}
