import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/Perfil';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  perfiles:Perfil[];
  constructor(private idiomasServicio:DatosService) { }

  ngOnInit(): void {
    this.obteneridiomas();
  }

  private obteneridiomas(){
    this.idiomasServicio.obteneridiomas().subscribe(dato =>{
      
      this.perfiles= dato.filter(x=> (x.idioma !==null) && (x.idioma !=="") );
    })
  }
  onDeleteidioma(id?: number){
    if(id!=undefined){
      this.idiomasServicio.deletePer(id).subscribe(data=>{
        this.obteneridiomas();
      },err =>{
        alert("salio mal")
      })
    }

  }

}
