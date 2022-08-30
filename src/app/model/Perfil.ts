
export class Perfil {
    id?:number;
   public objetivos:String;
   public perfil:String; 
   public idioma:String;
    constructor( 
        objetivos:String,
        perfil:String,
         idioma:String){
          
           this.objetivos=objetivos;
           this.perfil=perfil;
           this.idioma=idioma;
         }
}