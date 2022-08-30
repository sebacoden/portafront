import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  //expLab : Experiencia ;
  expLab:String="";
  // esto estaba antes  this.sExperiencia.updateExp(id,this.expLab).subscribe(data=>{
  constructor(private sExperiencia:DatosService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
  }

  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    const editador= new Experiencia (this.expLab)
    this.sExperiencia.updateExp(id,editador).subscribe(data=>{
      this.router.navigate([''])
    },err=>{
      alert("salio mal")
      this.router.navigate([''])

    })
    
  }
}
