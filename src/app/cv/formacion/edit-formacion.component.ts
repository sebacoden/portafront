import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/model/Formacion';
import { DatosService } from 'src/app/service/datos.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-edit-formacion',
  templateUrl: './edit-formacion.component.html',
  styleUrls: ['./edit-formacion.component.css']
})
export class EditFormacionComponent implements OnInit {

  expLab:String="";
  constructor(private sformacion:DatosService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }




  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    const editador= new Formacion (this.expLab)
    this.sformacion.updateFor(id,editador).subscribe(data=>{
      this.router.navigate([''])
    },err=>{
      alert("salio mal")
      this.router.navigate([''])

    })
    
  }
}
