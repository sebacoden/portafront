import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { DatosService } from 'src/app/service/datos.service';
import{ Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login.component';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  mostrar:boolean=false;
  subscription?: Subscription;

  
  exps: Experiencia[]=[]

  constructor(public experienciaServicio:DatosService, ) {
   }

  ngOnInit(): void {
    this.obtenerexperiencia();
  }

  obtenerexperiencia(){
    this.experienciaServicio.obtenerexperiencia().subscribe(dato =>{
      this.exps=dato
      
    })
  }

  onDeleteExp(id?: number){
    if(id!=undefined){
      this.experienciaServicio.deleteExp(id).subscribe(data=>{
        this.obtenerexperiencia();
      },err =>{
        alert("salio mal")
      })
    }

  }

  
  

  
   
  

}
