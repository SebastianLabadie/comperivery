
import { Administrador } from './../models/Administrator';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginService } from './login.service';


@Injectable({ providedIn: 'root' })
export class AdministradorService{

  url: string;
  Administradores = [];
  token: string;
  barraDelPath = '/';
  auth = 'auth';

  constructor(private http: HttpClient) {

    this.url = environment.BASE_API_URL + environment.END_POINT_ADMINISTRADOR
    this.token =  LoginService.getToken();

  }


  getAll():Observable<Administrador[]>{
   
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
   
    
    return this.http.get<Administrador[]>(this.url,httpOptions);
  }

  getOne(id: number){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    return this.http.get<Administrador>(url, httpOptions);
  }

  post(administrador: Administrador){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };

    return this.http.post<Administrador>(this.url, administrador, httpOptions);
  }

  put(id: number, administrador: Administrador){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    
    return this.http.put<Administrador>(url, administrador, httpOptions);
  }

  delete(id: number){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    return this.http.delete<Administrador>(url, httpOptions);
  }

  getOrdenados(){
    return this.Administradores.sort(
      (a1, a2) => a1.id - a2.id
    );
  }
}
