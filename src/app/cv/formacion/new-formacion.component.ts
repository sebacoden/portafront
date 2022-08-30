import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/Formacion';
import { DatosService } from 'src/app/service/datos.service';


@Component({
  selector: 'app-new-formacion',
  templateUrl: './new-formacion.component.html',
  styleUrls: ['./new-formacion.component.css']
})
export class NewFormacionComponent implements OnInit {

  formacion:String="";
  constructor(private sFormacion:DatosService, private router :Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    if(this.formacion.length === 0){
      alert("please add a exp!")
      return
    }
    const form = new Formacion (this.formacion)
    this.sFormacion.NuevaFor(form).subscribe(data=>{
      alert("formacion añadida");
      this.router.navigate(['']);
    }, err =>{
      console.log("salio mal")
      this.router.navigate(['']);
    })
  
  }





}
