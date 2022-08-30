import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string
  contra:string
  constructor(private router :Router) { }

  ngOnInit(): void {
  }


  login(){
    if((this.usuario=="admin") && (this.contra =="123")){
      alert("Bienvenido");
      this.router.navigate(['']);
      return true
    }
    else{
      alert("salio mal");
      return false
    }

  }



}
