import { Tarifa } from './../models/tarifa';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class TarifaService{

  url: string;
  Tarifaes = [];
  token: string;
  barraDelPath = '/';
  auth = 'auth';

  constructor(private http: HttpClient) {
    this.url = environment.BASE_API_URL + environment.END_POINT_TARIFAS
    this.token =  LoginService.getToken();
  }

  getAll():Observable<Tarifa[]>{
   
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
   
    
    return this.http.get<Tarifa[]>(this.url,httpOptions);
  }

  getOne(id: number){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    return this.http.get<Tarifa>(url, httpOptions);
  }

  post(tarifa: Tarifa){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    console.log("esta es mi tarifa: ",tarifa)

    return this.http.post<Tarifa>(this.url, tarifa, httpOptions);
  }

  put(id: number, tarifa: Tarifa){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    
    return this.http.put<Tarifa>(url, tarifa, httpOptions);
  }

  delete(id: number){
    const httpOptions = {
      headers : new HttpHeaders(
        {auth: this.token}
      )
    };
    const url = this.url + this.barraDelPath +  id;
    return this.http.delete<Tarifa>(url, httpOptions);
  }

  getOrdenados(){
    return this.Tarifaes.sort(
      (a1, a2) => a1.id - a2.id
    );
  }
}
