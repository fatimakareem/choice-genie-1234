import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public customer;
    public username;

  constructor( private router: Router) { }
  checked_login() {
    if (localStorage.getItem('custum')) {
      let local = localStorage.getItem('custum');
      return true;
    }
    // else if(localStorage.getItem('custom')) {
    //     return true;
    // }
      else {
      return false;    }
  }
check_login() {
    if (localStorage.getItem('user')) {
      let local = localStorage.getItem('user');
      return true;
    }
    // else if(localStorage.getItem('custom')) {
    //     let local = localStorage.getItem('custom');
    //     return true;
    // }
      else {
      return false;    }
  }
  move(){
    this.router.navigate(['/consumerdashboard/']);
  }
  moving(){
    this.router.navigate(['/dashboard/'+ this.username]);
  }
  ngOnInit() {
    this.username = localStorage.getItem('user')
    console.log(this.username);
this.customer=localStorage.getItem('custum')
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  //  console.log("logout"); 
  }
}
