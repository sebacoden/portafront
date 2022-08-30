import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';
import { Formacion } from '../../model/Formacion';
import{ Subscription } from 'rxjs'

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  formaciones:Formacion[];
  constructor(private formacionServicio:DatosService) { }

  ngOnInit(): void {
    this.obtenerformaciones();

  }


  private obtenerformaciones(){
    this.formacionServicio.obtenerformaciones().subscribe(dato =>{
      this.formaciones=dato
    })
  }

  onDeleteFor(id?: number){
    if(id!=undefined){
      this.formacionServicio.deleteFor(id).subscribe(data=>{
        this.obtenerformaciones();
      },err =>{
        alert("salio mal")
      })
    }
  }
}
