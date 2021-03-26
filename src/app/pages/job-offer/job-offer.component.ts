import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobOfferService } from 'src/app/services/jobOffer.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css'],
})
export class JobOfferComponent implements OnInit {

  public sub$: any;
  public jobOffer: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobOfferService: JobOfferService
  ) { }

  ngOnInit(): void {
    this.sub$ = this.route.paramMap.subscribe((param: ParamMap) => {
      this.jobOfferService.getJobOffer(param.get('id')).subscribe(
        response => {
          this.jobOffer = response;
        },
        error => {
          console.log('Error: ' + JSON.stringify(error));
        }
      );
    });
  }

  // Para que no se quede escuchando permanentemente
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
