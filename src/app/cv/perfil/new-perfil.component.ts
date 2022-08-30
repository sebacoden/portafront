import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/Perfil';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.component.html',
  styleUrls: ['./new-perfil.component.css']
})
export class NewPerfilComponent implements OnInit {

  idioma:String="";
  //se crean vacios para hacer un correto bodyrequest con el back.
  objetivos:String="";
  perfil:String="";

  constructor(private sPerfil:DatosService, private router :Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    
    const perf = new Perfil (this.idioma,this.perfil,this.objetivos)
    this.sPerfil.NuevaPer(perf).subscribe(data=>{
      alert("perfil añadida");
      this.router.navigate(['']);
    }, err =>{
      console.log("salio mal")
      this.router.navigate(['']);
    })
  
  }
}

