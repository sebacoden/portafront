import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/Perfil';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-edit-idiomas',
  templateUrl: './edit-idiomas.component.html',
  styleUrls: ['./edit-idiomas.component.css']
})

export class EditIdiomasComponent implements OnInit {

  idioma:String="";
  //se crean vacios para hacer un correto bodyrequest con el back.
  objetivosno:String="";
  perfil:String="";
  constructor(private sPerfil:DatosService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    const editador= new Perfil (this.perfil="",this.objetivosno="",this.idioma)
    this.sPerfil.updatePer(id,editador).subscribe(data=>{
      this.router.navigate([''])
    },err=>{
      alert("salio mal")
      this.router.navigate([''])

    })
    
  }
}
