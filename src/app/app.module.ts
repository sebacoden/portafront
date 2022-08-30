import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DatosComponent } from './cv/datos/datos.component';
import { PerfilComponent } from './cv/perfil/perfil.component';
import { ObjetivosComponent } from './cv/objetivos/objetivos.component';
import { FormacionComponent } from './cv/formacion/formacion.component';
import { IdiomasComponent } from './cv/idiomas/idiomas.component';
import { HeaderComponent } from './header/header.component';
import { BotonComponent } from './boton/boton.component';
import { ExperienciaComponent } from './cv/experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NewExperienciaComponent } from './cv/experiencia/new-experiencia.component';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './cv/experiencia/edit-experiencia.component';
import { NewFormacionComponent } from './cv/formacion/new-formacion.component';
import { EditFormacionComponent } from './cv/formacion/edit-formacion.component';
import { NewIdiomasComponent } from './cv/idiomas/new-idiomas.component';
import { EditIdiomasComponent } from './cv/idiomas/edit-idiomas.component';
import { NewObjetivosComponent } from './cv/objetivos/new-objetivos.component';
import { EditObjetivosComponent } from './cv/objetivos/edit-objetivos.component';
import { EditPerfilComponent } from './cv/perfil/edit-perfil.component';
import { NewPerfilComponent } from './cv/perfil/new-perfil.component';
import { NewProyectosComponent } from './proyectos/new-proyectos.component';
import { LoginComponent } from './login.component';


@NgModule({
  
  declarations: [
    AppComponent,
    DatosComponent,
    PerfilComponent,
    ObjetivosComponent,
    FormacionComponent,
    IdiomasComponent,
    HeaderComponent,
    BotonComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    NewExperienciaComponent,
    HomeComponent,
    EditExperienciaComponent,
    NewFormacionComponent,
    EditFormacionComponent,
    NewIdiomasComponent,
    EditIdiomasComponent,
    NewObjetivosComponent,
    EditObjetivosComponent,
    EditPerfilComponent,
    NewPerfilComponent,
    NewProyectosComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot([ 
      {path:'', component:HomeComponent},
      //paths experiencia
      {path:"nuevaexp",component: NewExperienciaComponent},
      {path:'editexp/:id',component:EditExperienciaComponent},
      //paths para formacion
      {path:"nuevafor",component: NewFormacionComponent},
      {path:'editfor/:id',component:EditFormacionComponent},
      //paths para perfil idomas
      {path:"nuevaidioma",component: NewIdiomasComponent},
      {path:'editeidioma/:id',component:EditIdiomasComponent},
      //objs
      {path:"nuevaobj",component: NewObjetivosComponent},
      {path:'editeobj/:id',component:EditObjetivosComponent},
      //perfil
      {path:"nuevaper",component: NewPerfilComponent},
      {path:'editeper/:id',component:EditPerfilComponent},
      //proyectos
      {path:'proyectos',component:NewProyectosComponent},
      //login
      {path:'login',component:LoginComponent},


  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
