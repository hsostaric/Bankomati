import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ATM } from 'src/app/modeli/atm';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AtmService } from 'src/app/services/atm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankomati',
  templateUrl: './bankomati.component.html',
  styleUrls: ['./bankomati.component.css']
})
export class BankomatiComponent implements OnInit {
  public atms: ATM[] = [];
  public ima!: boolean;
  vrste = ['beskontaktni', 'uplatno-isplatni', 'dnevno-noćni trezor', 'kovinomat'];

  bankomatiForm = new FormGroup({
    adresa: new FormControl(''),
    vrsta: new FormControl('-')
  });


  constructor(private atmService: AtmService) { }

  ngOnInit(): void {
    this.getAtms();
  }

  getAtms(): void {
    this.atmService.getAtms().subscribe(
      bank => this.atms = bank
    );
  }

  hasItems(): void {
    this.ima = this.atms.length > 0 ? true : false;
  }

  onSubmit() {
    this.getAtmsByAdressAndtype(this.bankomatiForm.value['adresa'], this.bankomatiForm.value['vrsta']);
  }

  getAtmsByAdressAndtype(adresa: string, vrsta: string) {
    if ((adresa.trim() !== null && adresa.trim().length > 0)
      && (vrsta.trim() != null && vrsta.trim() && vrsta.trim() !== '-')) {
      this.atmService.getATMbyAdresaVrsta(adresa, vrsta).subscribe(atm => this.atms = atm);

      console.log('imam oba parametra.');
    }
    else if ((adresa.trim() === '' && adresa.trim().length === 0)
      && (vrsta.trim() !== null && vrsta.trim().length > 0 && vrsta.trim() !== '-')) {
      this.atmService.getATMbyVrsta(vrsta).subscribe(atm => this.atms = atm);
      //this.atms= this.atms.filter(atm=>atm.vrsta===vrsta);
      console.log("filtriram prema vrsti bankomata.");
    }
    else {
      this.atmService.getATMbyAdresa(adresa).subscribe(atms => this.atms = atms);
      //this.atms=this.atms.filter(atm=>atm.adresaBankomata.indexOf(adresa)>-1);
      console.log("filtriram po adresi.");
    }

  }
  onChange(e: any): void {
    console.log(e.target.value + "\t" + this.bankomatiForm.value['adresa']);
    this.getAtmsByAdressAndtype(this.bankomatiForm.value['adresa'], e.target.value);
  }
  
  obrisi(atm:ATM):void{
    this.atms= this.atms.filter(atm2=>atm2!=atm);
    this.atmService.deleteATM(atm).subscribe();
  }
 
}
