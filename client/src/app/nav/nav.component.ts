import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  path: string[] = [];
  pathTitle: string;


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.getCurrentUser();
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(
  //     {
  //       next: user => this.loggedIn = !!user,
  //       error: error => console.log(error)
  //     })
  // }

  login() {
    this.accountService.login(this.model).subscribe(
      {
        next: _ => this.router.navigateByUrl('/members')
        // error: error => console.log(error)
      })
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
    this.model = null;
  }

}
