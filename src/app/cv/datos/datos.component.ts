import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';
import { Persona } from '../../model/Persona';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  personas:Persona[];

  constructor(private personaServicio:DatosService) { }

  ngOnInit(): void {
    this.obtenerpersonas();
    
  }

private obtenerpersonas(){
  this.personaServicio.obtenerlistadepersonas().subscribe(dato =>{
    this.personas=dato
  })
}


}
