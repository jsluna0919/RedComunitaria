import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/api-response.model';
import { Usuario } from '../models/usuario.model';
import { CrearUsuario } from '../models/crear-usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private apiURL = 'http://localhost:8080/usuarios'
  constructor(private http: HttpClient){}

  obtenerUsuario(id: number): Observable<ApiResponse<Usuario>>{
    return this.http.get<ApiResponse<Usuario>>(`${this.apiURL}/${id}`)
  }

  crearUsuario(usuario: CrearUsuario): Observable<ApiResponse<CrearUsuario>>{
    return this.http.post<ApiResponse<CrearUsuario>>(`${this.apiURL}/crear`, usuario)
  }
  
}
