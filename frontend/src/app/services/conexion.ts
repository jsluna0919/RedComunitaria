import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../envs/environment';
import { Dato } from '../shared/models/data.model';
import { ApiResponse } from '../shared/models/data.model';
import { Indicator } from '../shared/models/indicadorNode.model';

@Injectable({
  providedIn: 'root',
})
export class Conexion {
  private http = inject(HttpClient);
  private apiUrl = `${environment.API_URL }`;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  getData() {
    
    return this.http.get<ApiResponse<Dato[]>>(`${this.apiUrl}/mediciones/detalle`);
  }

  getIndicators() {
    return this.http.get<Indicator[]>(`${this.apiUrl}/indicators`);
  }
}
