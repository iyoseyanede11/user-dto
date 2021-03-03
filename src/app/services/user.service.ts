import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from "../store/models/user.model";
import { throwError } from 'rxjs';
import { catchError, delay, first, retryWhen, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    constructor(public http: HttpClient) { }
    
    BASE_URL = 'https://run.mocky.io/v3'

    createUser = (resource: User) => this.http.post(this.BASE_URL + '/a171ec32-62d7-4fcf-a5e7-37d72cdc781d', resource)
    .pipe(
        tap(object => console.log(object)),
        retryWhen(error => error.pipe(
          delay(4000),
          take(3)
        )),
        first(value => true),
        catchError((error: HttpErrorResponse) => {
          return throwError(error)
        })
        )

}