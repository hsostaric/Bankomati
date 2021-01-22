import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { User } from '../modeli/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private bankomatiApi = 'api/users';
  constructor(private http: HttpClient) {

  }


  login(username: string, password: string): Observable<User> {
    let url = `${this.bankomatiApi}?username=${username}&password=${password}`;
    return this.http.get<User>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


