import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/Perfil';
import { DatosService } from 'src/app/service/datos.service';


@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {

  perfiles:Perfil[];

  constructor(private objsServicio:DatosService) { }

  ngOnInit(): void {
    this.obtenerobjs();
  }



  private obtenerobjs(){
    this.objsServicio.obtenerobjs().subscribe(dato =>{
      this.perfiles= dato.filter(x=>(x.objetivos !==null) && (x.objetivos !=="") );
    })
  }

  private obteneridiomas(){
    this.objsServicio.obteneridiomas().subscribe(dato =>{
      
      this.perfiles= dato.filter(x=>(x.objetivos !==null) && (x.objetivos !==""));
    })
  }
  onDeleteidioma(id?: number){
    if(id!=undefined){
      this.objsServicio.deletePer(id).subscribe(data=>{
        this.obteneridiomas();
      },err =>{
        alert("salio mal")
      })
    }

  }
}
