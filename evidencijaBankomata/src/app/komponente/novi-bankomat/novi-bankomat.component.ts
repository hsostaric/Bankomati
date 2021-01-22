import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ATM } from 'src/app/modeli/atm';
import { AtmService } from 'src/app/services/atm.service';

@Component({
  selector: 'app-novi-bankomat',
  templateUrl: './novi-bankomat.component.html',
  styleUrls: ['./novi-bankomat.component.css']
})
export class NoviBankomatComponent implements OnInit {
  vrste = ['beskontaktni', 'uplatno-isplatni', 'dnevno-noćni trezor', 'kovinomat'];
  form!: FormGroup;
  isAddMode!: boolean;
  id!: number;
  constructor(private atmService: AtmService, private router: Router, private route: ActivatedRoute) {

  }
  inicijalizirajFormu(): void {
    this.form = new FormGroup({
      adresaBankomata: new FormControl('', Validators.required),
      vrsta: new FormControl(this.vrste[0]),
      koridinataE: new FormControl('', Validators.required),
      kordinataN: new FormControl('', Validators.required)
    });
  }
  model: ATM={} as ATM;
  ngOnInit(): void {
    this.odrediNacinRada();
    if(this.isAddMode){
      this.model= new ATM();
    }else{
      this.atmService.getAtmsByID(this.id).subscribe(atm=> this.form.patchValue(atm));
      this.atmService.getAtmsByID(this.id).subscribe(atm=> this.model=atm);
     
    }
    this.inicijalizirajFormu();
  }

  odrediNacinRada(): void {
    this.id = +this.route.snapshot.params['id']!;
    this.isAddMode = !this.id;

  }
  odradiOperaciju(): void {
    if ( this.form.valid) {
     this.model.adresaBankomata = this.form.value.adresaBankomata;
      this.model.kordinataN = this.form.value.kordinataN;
      this.model.koridinataE = this.form.value.koridinataE;
      this.model.vrsta = this.form.value.vrsta;
      if (this.isAddMode) {
        this.dodajBankomat();
      } else {
        this.azurirajbankomat();
      }
      this.form.reset();
      this.router.navigateByUrl('/bankomati');
    }

    
  }

  azurirajbankomat(): void {
   console.log("update");
    this.atmService.updateATM(this.model).subscribe();
  }

  dodajBankomat(): void {
      this.atmService.addATM(this.model).subscribe();
     console.log("add");
  }
 
}
