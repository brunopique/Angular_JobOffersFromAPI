import { JobOfferService } from 'src/app/services/jobOffer.service';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
})
export class JobOffersComponent implements OnInit {
  public jobOffers: Array<any>;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private loginService: LoginService,
    private jobOfferService: JobOfferService
  ) {
    this.jobOffers = [];

    if (!loginService.getIsLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.getJobOffers();
  }

  public getJobOffers(): void {
    this.homeService.getJobOffers().subscribe(
      (response) => {
        this.jobOffers = response;
      },
      (error) => {
        console.log('Error: ' + JSON.stringify(error));
      }
    );
  }

  public gotoJobOfferDetail(id: number): void {
    console.log(`job id number: ${id}`);
    this.router.navigate(['/offers/', id]);
  }

  public delete(id: number): void {
    this.jobOfferService.deleteOffer(id);
  }

  public logout(): void {
    this.loginService.logout();
  }
}
