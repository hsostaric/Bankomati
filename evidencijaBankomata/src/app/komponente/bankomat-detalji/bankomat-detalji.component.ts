import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATM } from 'src/app/modeli/atm';
import { AtmService } from 'src/app/services/atm.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bankomat-detalji',
  templateUrl: './bankomat-detalji.component.html',
  styleUrls: ['./bankomat-detalji.component.css']
})
export class BankomatDetaljiComponent implements OnInit {
  atm!:ATM;
  constructor(private atmService:AtmService,  private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getATMbyID();
  }

  getATMbyID():void{
   let id = +this.route.snapshot.paramMap.get('id')!;
   this.atmService.getAtmsByID(id).subscribe(bana=>this.atm=bana);
  }

  nazad():void{
    this.location.back();
  }
}
