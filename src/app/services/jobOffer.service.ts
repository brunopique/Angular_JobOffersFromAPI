import { NewJobOfferForm } from './../models/newJobOffer.Form';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobOfferService {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  public getJobOffer(id: any): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/ofertas/' + id);
  }

  public deleteOffer(id: number): void {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };

    console.log(httpOptions);

    this.httpClient
      .delete('http://localhost:8080/api/ofertas/' + id, httpOptions)
      .subscribe(
        (response: any) => {
          console.log(response);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          this.loginService.logout();
        }
      );
  }

  public postOffer(offerModel: NewJobOfferForm) {
    console.log('LoginService');
    console.log(JSON.stringify(offerModel));

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    };
    this.httpClient
      .post(
        'http://localhost:8080/api/ofertas',
        JSON.stringify(offerModel),
        httpOptions
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          alert('¡Oferta subida correctamente!');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
