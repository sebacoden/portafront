import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/Perfil';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfiles:Perfil[];
  constructor(private perfilServicio:DatosService) { }

  ngOnInit(): void {
    this.obtenerperfil();
  }

  private obtenerperfil(){
    this.perfilServicio.obtenerperfil().subscribe(dato =>{
      this.perfiles= dato.filter(x=> (x.perfil !==null) && (x.perfil !=="") );

    })
  }

  onDeleteidioma(id?: number){
    if(id!=undefined){
      this.perfilServicio.deletePer(id).subscribe(data=>{
        this.obtenerperfil();
      },err =>{
        alert("salio mal")
      })
    }

  }
}
