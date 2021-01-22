
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/modeli/user';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login-forma',
  templateUrl: './login-forma.component.html',
  styleUrls: ['./login-forma.component.css']
})
export class LoginFormaComponent implements OnInit {

  user!:User;
  form!:FormGroup;
  isLoggedIn!:boolean;
  hasErrors!:boolean;
  username!:string;
  password!:string;

  constructor(private authService: AuthorizationService) {
    this.inicijalizirajFormu();
   }

  inicijalizirajFormu(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
   
  }
  login():void{
    if(this.form.valid){
      this.authService.login(this.form.value.username,this.form.value.password).subscribe(
        user=>console.log(user)
      );
    }

  }

}
