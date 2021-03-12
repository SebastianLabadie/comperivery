import { Administrador } from './../models/Administrator';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { CredencialesLogin } from '../models/CredencialesLogin';


@Injectable({ providedIn: 'root' })
export class LoginService{

  url: string;
  token: string ="";
  barraDelPath = environment.BARRA_DE_PATH;
  auth = environment.AUTH;

  constructor(private http: HttpClient) {

    this.url = environment.BASE_API_URL + environment.END_POINT_LOGIN


  }



  public post(credencial: CredencialesLogin){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };

    return this.http.post<Administrador>(this.url,credencial, httpOptions);
  }

    
  public  desLoguear(){
    localStorage.removeItem(environment.HOSPEDAJE_RESERVA_PUNTO_TURISTICO);
    localStorage.removeItem(environment.LOCAL_STORAGE_ADMINISTRADOR);    
  }

  public  estaLogueado():boolean{
    let buffer: string =  `email: "admin@uruguaynatural.com.uy"
    esSuperAdministrador: true
    id: 1
    nombre: "Administrador"
    password: "1234"
    token: "26f2fe6e-8022-4941-8466-1e537564ee3d"`//localStorage.getItem(environment.LOCAL_STORAGE_ADMINISTRADOR);
    let hayToken = false;
    try{
      let administrador = JSON.parse(buffer);
      if (administrador.token!=""){
        hayToken = true;
      }      
    }catch{        
    }
    return hayToken;
  }

  public  obtenerAdministradorLogueado():Administrador{
    let buffer: string =  localStorage.getItem(environment.LOCAL_STORAGE_ADMINISTRADOR);
    let administrador = new Administrador();
    try{
      administrador = JSON.parse(buffer);      
    }catch{        
    }
    return administrador;
  }

  static getToken():string {
    let buffer: string =  `email: "admin@uruguaynatural.com.uy"
    esSuperAdministrador: true
    id: 1
    nombre: "Administrador"
    password: "1234"
    token: "26f2fe6e-8022-4941-8466-1e537564ee3d"`//localStorage.getItem(environment.LOCAL_STORAGE_ADMINISTRADOR);
    try{
      let administrador = JSON.parse(buffer);
      return administrador.token;     
      
    }catch{        
    }
    return "";
  }

  
  public guardarAdministradorLogueadoEnLocalStorage(administrador: Administrador){
    localStorage.setItem(environment.LOCAL_STORAGE_ADMINISTRADOR,JSON.stringify(administrador));
  }
 }


 
