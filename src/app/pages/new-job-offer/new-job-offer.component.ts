import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { JobOfferService } from 'src/app/services/jobOffer.service';
import { NewJobOfferForm } from './../../models/newJobOffer.Form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent implements OnInit {

  offerModel: NewJobOfferForm;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private jobOfferService: JobOfferService
  ) {
    this.offerModel = new  NewJobOfferForm();

    if (!loginService.getIsLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

  public onSubmit(f: NgForm): void {
    this.jobOfferService.postOffer(this.offerModel);
  }
}
