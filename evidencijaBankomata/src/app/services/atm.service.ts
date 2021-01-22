import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ATM } from '../modeli/atm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  private bankomatiApi = 'api/bankomati';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getAtms(): Observable<ATM[]> {
    return this.httpClient.get<ATM[]>(this.bankomatiApi);
  }

  getAtmsByID(id: number): Observable<ATM> {

    let url = `${this.bankomatiApi}/${id}`;
    console.log(url);
    console.log(this.httpClient.get<ATM>(url))
    return this.httpClient.get<ATM>(url);
  }

  getATMbyAdresa(adresa: string): Observable<ATM[]> {
    const params = new HttpParams({
      fromString: `adresaBankomata=${adresa}`
    });
    return this.httpClient.get<ATM[]>(this.bankomatiApi, { params: params });
  }

  getATMbyVrsta(vrsta: string): Observable<ATM[]> {
    const params = new HttpParams({
      fromString: `vrsta=${vrsta}`
    });
    return this.httpClient.get<ATM[]>(this.bankomatiApi, { params: params });
  }

  addATM(atm: ATM): Observable<ATM> {
    return this.httpClient.post<ATM>(this.bankomatiApi, atm, this.httpOptions);
  }

  getATMbyAdresaVrsta(adresa: string, vrsta: string): Observable<ATM[]> {
    const params = new HttpParams({
      fromString: `vrsta=${vrsta}&adresaBankomata=${adresa}`
    });
    return this.httpClient.get<ATM[]>(this.bankomatiApi, { params: params });
  }

  deleteATM(atm: ATM | number): Observable<ATM> {
    const id = typeof atm === 'number' ? atm : atm.id;
    const url = `${this.bankomatiApi}/${id}`;
    return this.httpClient.delete<ATM>(url,this.httpOptions);
  }

  updateATM(atm:ATM):Observable<any>{
    console.log(atm);
    return this.httpClient.put(this.bankomatiApi,atm,this.httpOptions);
  }

}
