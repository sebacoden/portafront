import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  experiencia:String="";

  constructor(private sExperiencia:DatosService, private router :Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    if(this.experiencia.length === 0){
      alert("please add a exp!")
      return
    }
    const expe = new Experiencia (this.experiencia)
    this.sExperiencia.NuevaExp(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      console.log("salio mal")
      this.router.navigate(['']);
    })
  
  }

  hacealgo(){
    alert("hace algo")
  }

}
