import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResourceLoader } from '@angular/compiler';

export interface Params {
  email: String;
  password: String;
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class LoginService {
  loginUrl = 'http://localhost:8080/api/user/login';

  constructor(private http: HttpClient) {}

  login(loginParam: Params): Observable<Params> {
    console.log(loginParam);
    return this.http
      .post<Params>(this.loginUrl, loginParam, httpOptions)
      .pipe(
        catchError(this.handleError('loginService', 'operation', {} as Params))
      );
  }

  private handleError<T>(
    serviceName = '',
    operation = 'operation',
    result = {} as T
  ) {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning a safe result.
      return of(result);
    };
  }
}
