import { LoginService } from 'src/app/services/login.service';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    HomeService,
    LoginService
  ]
})
export class HomeComponent implements OnInit {

  public jobOffers: Array<any>;

  constructor(
    private homeService: HomeService,
    private router: Router) {
      this.jobOffers = [];
     }

  ngOnInit(): void {
    this.homeService.getJobOffers().subscribe(
      response => {
        this.jobOffers = response;
      },
      error => {
        console.log('Error: ' + JSON.stringify(error));
      }
    );
  }

  public gotoJobOfferDetail(id: number): void {
    console.log(`job id number: ${id}`);
    this.router.navigate(['/offers/', id]);
  }
}
