import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { HttpClient } from '@angular/common/http';
import { CrearEmprendimiento } from './crear';

@Injectable({
  providedIn: 'root'
})
export class EmprendimientoService {

  private apiUrl = 'https://redcomunitaria-ogn7.onrender.com/emprendimientos';

  constructor(private http: HttpClient){}

  crearEmprendimiento(usuario: CrearEmprendimiento): Observable<ApiResponse<CrearEmprendimiento>>{
    return this.http.post<ApiResponse<CrearEmprendimiento>>(`${this.apiUrl}/crear`, usuario)
  }
  
}