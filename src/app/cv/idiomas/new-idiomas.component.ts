import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/service/datos.service';
import { Perfil } from 'src/app/model/Perfil';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.css']
})
export class NewIdiomasComponent implements OnInit {

  idioma:String="";
  //se crean vacios para hacer un correto bodyrequest con el back.
  objetivos:String="";
  perfil:String="";

  constructor(private sPerfil:DatosService, private router :Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    //el componente a agregar tiene que ser el ultimo
    const perf = new Perfil (this.objetivos,this.perfil,this.idioma)
    this.sPerfil.NuevaPer(perf).subscribe(data=>{
      alert("perfil añadida");
      this.router.navigate(['']);
    }, err =>{
      console.log("salio mal")
      this.router.navigate(['']);
    })
  
  }
}
