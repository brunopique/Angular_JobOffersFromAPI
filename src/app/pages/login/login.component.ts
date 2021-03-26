import { LoginForm } from './../../models/login.Form';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit, OnDestroy {

  loginModel: LoginForm;
  sub: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
    // if (loginService.getIslogin()) {
    //   router.navigate(['offers']);
    // }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.loginService.getIsloginSub().subscribe(
      response => {
        console.log("ngOnInit");
        console.log(response);
        if (response) {
           this.router.navigate(['/offers']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  public onSubmit(f: NgForm){
    this.loginService.postLogin(this.loginModel);
  }

}
