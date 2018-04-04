import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { DataService } from '../data.service';
import { PagerService } from '../pager.service';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import {RandomService} from '../random.service';
import { HomeService } from '../home/home.service';
//import { SideBarService } from './side-bar.service';

declare const $: any;

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
})

  export class UserSidebarComponent implements OnInit, AfterContentInit {
  eUsage;
 
  cUsage;
  message: string;
  localVar;
  renewable;
  model;

  
  // min;
  // max;
  // price;
  constructor(private https: HttpClient,private http: Http, private route: ActivatedRoute,
     private sg: SimpleGlobal, private data: DataService,private someserv:RandomService,private obj: HomeService,private pagerService: PagerService) {
  //    if (this.sg['gv']) {
  //      this.localVar = this.sg['gv'];
  // }
  }
  private allItems: any[];
  prod_loaded = false;
  prods_loaded = false;
  public zip_code :any;
  items;
  title;
  pager: any = {};
  mySelect;
  private sub: Subscription;
  private zip: any;
  id;

  ngOnInit() {
    //this.someserv.telecast.subscribe(message=> this.message = message);
  //   this.sub = this.route.params.subscribe(params => {
  //     this.zip_code = +params['zip_code'];
  //     console.log();
  //    this.setPage(1);


  // });
   
  //this.months();
 
  }
  ngAfterContentInit() {
    // console.log(this.eUsage);
    // alert($("#mySelect").val());
    
  }
  
  onChange(e) {
    alert(e)
  }
  usage = [
  { value: 'building-0', viewValue: 'Building' },
  { value: 'restaurant-1', viewValue: 'Restaurant' },
  { value: 'store-2', viewValue: 'Store' },
  { value: 'manufacturing-plant-2', viewValue: 'Manufacturing Plant' },
  { value: 'office-2', viewValue: 'Office' },
  { value: 'other-2', viewValue: 'Other' }
  ];
  check(e) {
  // this.fetchitem();
  // this.route.params.subscribe(params => {
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + '/price_range/price_' + e + '_kwh/5.6/6.1/' + this.zip_code + '/', { headers: headers })
  //   .subscribe(Res => {
  //     this.sg['products'] = Res.json()['Results'];
  //     this.data.changeProducts(this.sg['products']);
  
  //   });
  //  });
  
  }
  //   fetchitem() {
  //     // this.route.params.subscribe(params => {
  //    //   let zip =  this.sg['product_zipcode'];
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json')
  //    this.http.get(Config.api + 'items_perpage/title/asc/' + this.items + '?page=1', { headers: headers })
  //   //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  //  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  //  //  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
  //       .subscribe(Res => {
  //         this.sg['products'] = Res.json()['Results'];
  //         this.data.changeProducts(this.sg['products']);
  //         this.allItems = this.sg['products'];
  //         for (let prod of this.sg['products']) {
  //           // console.log(prod["plan_information"])
  //           // console.log(prod["price_rate"])
  //           prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  //           prod["price_rate"] = prod["price_rate"].split('..', 3000);
  //         }
  //      });
  
  //     }
  months;
  fetchProducts() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  this.http.post(Config.api + 'filter/' + this.zip_code +'',this.months ,{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
  
  fetchzip() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers })
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  //  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
 
  company() {
  // alert(this.premiseID.toString().length)
  //  alert('hello');
  // if(this.premiseID&&this.premiseID.toString().length===17) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.https.get(Config.api +'companytitle/',{ headers: headers })
  
  //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
  .subscribe(Res => {
  console.log(Res);
  //     this.state= Res[0].state;
  //  Res[0].state=this.model;
  this.title = Res;
  
  
  // this.data.changeProducts(this.sg['products']);
  
  });
  }
  
 

  fetchmutimonth(value1,value2,value3,value4,value5,value6,value7) {
    // this.route.params.subscribe(params => {
    //   let zip =  this.sg['product_zipcode'];
   console.log(value1,value2,value3,value4,value5,value6,value7,'tttttttttttt')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post('http://192.168.30.52:9000/choice/multimonth/'+ this.zip_code +'/', JSON.stringify({
      "plan_information1": value1,
      "plan_information2": value2,
      "plan_information3": value3,
      "plan_information4": value4,
      "plan_information5": value5,
      "plan_information6": value6,
      "plan_information7": value7,
      }
      ),{ headers: headers })
 
    // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
    .subscribe(Res => {
      console.log(Res)
       //console.log(selectedvalue)
      // console.log(plan_information)
    this.sg['products'] = Res.json()['Results'];
    this.data.changeProducts(this.sg['products']);
    for (let prod of this.sg['products']) {
    // console.log(prod["plan_information"])
    // console.log(prod["price_rate"])
    prod["plan_information"] = prod["plan_information"].split(',,', 3000);
    prod["price_rate"] = prod["price_rate"].split('..', 3000);
    }

    });}
  
  //    fetchprice() {
  //     // this.route.params.subscribe(params => {
  //    //   let zip =  this.sg['product_zipcode'];
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //   // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //   this.http.get(Config.api + 'price_range/MIN/MAX/ZIPCODE/' + this.min +'/'+this.max+'/'+ this.zip_code +'/'+this.price,{ headers: headers })
  
  //  // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
  //       .subscribe(Res => {
  //         this.sg['products'] = Res.json()['Results'];
  //         this.data.changeProducts(this.sg['products']);
  //         for (let prod of this.sg['products']) {
  //           console.log(prod["plan_information"])
  //           console.log(prod["price_rate"])
  //           prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  //           prod["price_rate"] = prod["price_rate"].split('..', 3000);
  //         }
  //      });}
  fetchrenewable() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  
  this.http.get(Config.api + 'reneable/' + this.zip_code + '/',{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
  
  
  
  
  
  
  
  }
  