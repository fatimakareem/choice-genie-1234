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
import { DeleteService } from './delete.service';
import { DataService } from '../data.service';
import { EditService } from './edit.service';
import { NgForm,FormBuilder, FormGroup, Validators, FormControl, AbstractControl,FormGroupDirective,RadioControlValueAccessor } from '@angular/forms';

import swal from 'sweetalert2';
import {NgControl} from '@angular/forms';



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
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'

})
export class DashboardComponent implements OnInit, AfterViewInit {
    constructor(private route: ActivatedRoute, private https: HttpClient, private newService: DeleteService,private serve:EditService,
        private formBuilder: FormBuilder,  private router: Router, private http: Http, private pagerService: PagerService, private homeService: HomeService, private sg: SimpleGlobal,private dialog: MatDialog, private dataa: DataService, private companyService: CompanyService) {

            this.title = localStorage.getItem('username');

        }


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
     
    obj:any=[];
    editdata: any = [];
    setPage(title,page: number) {
        // alert("username")
        this.title = localStorage.getItem('title');
         console.log("usernameeeeeeeeeeeee",this.title)

        const Results = {};
      
        this.companyService.searchProduct(title,page).subscribe(Response => {
            // console.log(Response.id);
            // this.id = Response.id;
            console.log('service');       // localStorage.setItem('products',response['Results']);
            this.sg['products'] = Response['Results'];
            this.editdata=Response['Results'];
            console.log(this.sg['products']);
            for (let prod of this.sg['products']) {
                this.id = prod["id"];
                console.log(prod["id"])
                //console.log(prod["plan_information"])
                //console.log(prod["price_rate"])
                prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                prod["price_rate"] = prod["price_rate"].split('..', 3000);

            }

            this.dataa.changeProducts(this.sg['products']);
            this.prod_loaded = true;
            this.prods_loaded = true;
            this.allItems = this.sg['products'];
            // console.clear()
            console.log(Response['Total Result']);
             this.pager = this.pagerService.getPager(Response['Total Result'], page, 10);
            //this.setPage(1);
            // initialize to page 1
            // console.log(this.sg['products']);

        });
        //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    data;
   // public title;
   
    dataId = '';
    list = 'Hello';

    //Event Binding of Delete Buttons
    btnDeleteClick(id) {
        this.dataId = id;
        console.log('id : ' + this.dataId);
    }

    //Event Binding of PopUp Delete Modal

    deleteClick(id) {
        console.log('delete' + id);

        //Calling Delete Service
        this.newService.DeleteTodoList(id).subscribe(data => {
            console.log(data);

            // this.route.params.subscribe(params => {


                //  console.log('paramsssssssssss',params['username'])
                this.setPage(this.title,1)
                //  this.setPage(1)
    
            // });
            //  alert("junaid");
            // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
            // this.data.currentProducts
            this.Sub = this.route.params.subscribe(params => {
                this.title = +params['title'];
                
                // alert(this.username);
            });

        }, error => {
        });
     //   window.location.reload();

    }
    catagoryId = '';
   // list = 'Hello';
   title;
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
          
    //Event Binding of Delete Buttons
    btnEditClick(id,val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11) {
        this.catagoryId = id;
        this.title=val1;
        this.cancelation_fee=val2;
        this.fact_sheet=val3;
        this.phone=val4;
        this.plan_information=val5;
        this.price_rate=val6;
        this.profile_logo=val7;
        this.profileurl=val8;
        this.rating_logo=val9;
        this.sign_up=val10;
        this.terms_of_service=val11;
       
        console.log(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11)
        console.log('id : ' + this.catagoryId );
    }

    //Event Binding of PopUp Delete Modal

    editClick(updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl) {
        console.log('edit' +updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl);
console.log("TS OBJECT",updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl);
        //Calling Delete Service
        this.serve.editTodoList( this.catagoryId,updatedtitle,updatedsign_up,updatedphone,updatedterms_of_service,updatedfact_sheet,updatedcancelation_fee,updatedprice_rate,updatedplan_information,updatedrating_logo,updatedprofile_logo,updatedprofileurl).subscribe(data => {
            console.log(data);
            swal({
                type: 'success',
                title: 'Updated Your Profile',
                showConfirmButton: false,
                timer: 1500
              })
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

   
    private Sub: Subscription;
    form;
    updataForm : FormGroup;
    // constructor(private navbarTitleService: NavbarTitleService) { }
    public ngOnInit() {
      // this.title = localStorage.getItem('title')
        console.log(this.title,'gggggggggggggggg')
        this.updataForm = this.formBuilder.group({
          
            cancelation_fee: ['', Validators.compose([Validators.required])],
            fact_sheet: ['', Validators.compose([Validators.required])],
            phone: ['', Validators.compose([Validators.required])],
            id: ['', Validators.required],
            plan_information: ['',  Validators.compose([Validators.required])],
            price_rate: ['', Validators.compose([Validators.required])],
            profile_logo: ['', Validators.compose([Validators.required])],
            profileurl: ['', Validators.required],
            rating_logo: ['',  Validators.compose([Validators.required])],
            sign_up: ['', Validators.compose([Validators.required])],
            terms_of_service: ['',  Validators.compose([Validators.required])],
            title: ['', Validators.compose([Validators.required])],
        });
        //    this.route.params.subscribe(params => {


            //  console.log('paramsssssssssss',params['username'])
            this.setPage(this.title,1)
            console.log(this.title,1)
            

        // });
        //  alert("junaid");
        // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
        // this.data.currentProducts
        this.Sub = this.route.params.subscribe(params => {
            this.title = +params['title'];
           // this.setPage(1)
            //  this.setPage(1)
            // alert(this.username);
        });
        // this.setPage();
        //  console.log()

        //    console.log("fatimaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    

         
 
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