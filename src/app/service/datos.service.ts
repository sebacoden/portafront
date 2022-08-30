import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Persona } from '../model/Persona';
import { Formacion } from '../model/Formacion';
import { Perfil } from '../model/Perfil';
import { Experiencia } from '../model/Experiencia';

const httpOptions={
  headers : new HttpHeaders({
    'Content-Type' : ' application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  // Esta url obtiene todos los datos 
 // se cambia la url para el deploy private apiUrl= 'http://localhost:8082'
 private apiUrl= 'https://portaback.herokuapp.com'
  constructor(private httpClient : HttpClient) { }

  obtenerlistadepersonas():Observable <Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.apiUrl+"/ver/personas"}`)
  }
  //////////////////////////////////SERVICIONS DE FORMACION///////////////////////////
  obtenerformaciones():Observable <Formacion[]>{
    return this.httpClient.get<Formacion[]>(`${this.apiUrl+"/ver/formacion"}`)
  }
  deleteFor(id:number): Observable<any>{
    //console.log("erorr por aca");
    const url = `${this.apiUrl}/delete-formacion/${id}` //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.delete<any>(url) 
  }
  public NuevaFor(formacion:Formacion):Observable<any>{
    const url = (`${this.apiUrl +"/new/formacion/"}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.post<any>(url,formacion) 
  }

  public updateFor(id:number,formacion:Formacion):Observable<any>{
    //const url = (`${this.apiUrl}/updateexp/${id}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.put<any>(this.apiUrl+`/updatefor/${id}`,formacion) 
  }

//////////////////////////////SERVICION DE PERFIL//////////////////////////////
  // es un sola una tabla
  obteneridiomas():Observable <Perfil[]>{
    return this.httpClient.get<Perfil[]>(`${this.apiUrl+"/ver/perfil"}`)
  }

  obtenerobjs():Observable <Perfil[]>{
    return this.httpClient.get<Perfil[]>(`${this.apiUrl+"/ver/perfil"}`)
  }
  obtenerperfil():Observable <Perfil[]>{
    return this.httpClient.get<Perfil[]>(`${this.apiUrl+"/ver/perfil"}`)
  }
  public NuevaPer(perfil:Perfil):Observable<any>{
    const url = (`${this.apiUrl +"/new/perfil/"}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.post<any>(url,perfil) 
  }

  public updatePer(id:number,editador:Perfil):Observable<any>{
    //const url = (`${this.apiUrl}/updateexp/${id}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    console.log("en back")
    console.log(editador)

    return this.httpClient.put<any>(this.apiUrl+`/updateper/${id}`,editador) 
  }
  
  deletePer(id:number): Observable<any>{
    //console.log("erorr por aca");
    const url = `${this.apiUrl}/delete-perfil/${id}` //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.delete<any>(url) 
  }
//////////servicos de Experiencias///////////////////////////////////////////////////////
  obtenerexperiencia():Observable <Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.apiUrl+"/ver/experiencia"}`)
  }

  deleteExp(id:number): Observable<any>{
    //console.log("erorr por aca");
    const url = `${this.apiUrl}/delete-experiencia/${id}` //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.delete<any>(url) 
  }
  public NuevaExp(experiencia:Experiencia):Observable<any>{
    const url = (`${this.apiUrl +"/new/experiencia/"}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.post<any>(url,experiencia) 
  }

  public updateExp(id:number,experiencia:Experiencia):Observable<any>{
    //const url = (`${this.apiUrl}/updateexp/${id}`) //CUIDADO CON EL SIMBOLO RARO   ``````` . ` .``````
    return this.httpClient.put<any>(this.apiUrl+`/updateexp/${id}`, experiencia) 
  }
//////////////////////////////////Servicio Expericias///////////////////////////////////////////////////////
}
