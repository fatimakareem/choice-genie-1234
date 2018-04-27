import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
public username;
  constructor( private router: Router) { }
  check_login() {
    if (localStorage.getItem('username')) {
      let local = localStorage.getItem('username');
      return true;
    }
      else {
      return false;    }
  }
  ngOnInit() {
    this.username = localStorage.getItem('username')
    console.log(this.username);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  //  console.log("logout"); 
  }
}
