import { Injectable } from '@angular/core';
import { CrearUsuario } from './crear';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Usuario {

  private apiUrl = 'https://redcomunitaria-ogn7.onrender.com/usuarios';

  constructor(private http: HttpClient){}

  usuarioCrear(usuario: CrearUsuario): Observable<ApiResponse<CrearUsuario>>{
    return this.http.post<ApiResponse<CrearUsuario>>(`${this.apiUrl}/crear`, usuario)
  }
  
}