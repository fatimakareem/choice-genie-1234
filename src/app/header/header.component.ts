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
    if (localStorage.getItem('user')) {
      let local = localStorage.getItem('user');
      return true;
    }
      else {
      return false;    }
  }
  move(){
    this.router.navigate(['/dashboard/'+this.username]);
  }
  ngOnInit() {
    this.username = localStorage.getItem('user')
    console.log(this.username);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  //  console.log("logout"); 
  }
}
