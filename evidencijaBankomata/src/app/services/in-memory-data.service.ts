import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ATM } from '../modeli/atm';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let users = [
      {
        id: 1,
        username: "admin",
        password: "admin",
        isAdmin: true
      },
      {
        id: 2,
        username: "user",
        password: "user",
        isAdmin: false
      }

    ];

    let bankomati = [
      {
        id: 1,
        vrsta: "beskontaktni",
        adresaBankomata: "Trg bana Josipa Jelačića 5",
        koridinataE: "15.966568",
        kordinataN: "45.815399"
      },
      {
        id: 2,
        vrsta: "uplatno-isplatni",
        adresaBankomata: "Trg kralja Tomislava 23",
        koridinataE: "15.936568",
        kordinataN: "45.412399"
      },
      {
        id: 3,
        vrsta: "dnevno-noćni trezor",
        adresaBankomata: "Trg kralja Tomislava 17",
        koridinataE: "16.00123",
        kordinataN: "45.412399"
      },
      {
        id: 4,
        vrsta: "kovinomat",
        adresaBankomata: "Ilica 43",
        koridinataE: "16.90123",
        kordinataN: "45.812399"
      },
      {
        id: 5,
        vrsta: "beskontaktni",
        adresaBankomata: "Ilica 1",
        koridinataE: "16.94123",
        kordinataN: "45.817699"
      },
      {
        id: 6,
        vrsta: "kovinomat",
        adresaBankomata: "Heinzlova 43",
        koridinataE: "16.65423",
        kordinataN: "45.811234"
      },
      {id: 7,
        vrsta: "kovinomat",
        adresaBankomata: "Trg bana Josipa Jelačića 3",
        koridinataE: "14.966568",
        kordinataN: "45.817399"},
    ];
    return { users , bankomati};
  }

  genId(bankomati: ATM[]): number {
    return bankomati.length > 0 ? Math.max(...bankomati.map(hero => hero.id)) + 1 : 1;
  }

}
