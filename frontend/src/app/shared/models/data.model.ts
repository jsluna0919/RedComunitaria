export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Dato {
  iso3: string;
  nombrePais: string;
  indicadorCodigo: string;
  indicadorNombre: string;
  anio: number;
  valueScreen: number;
  score: number;
  rank: number;
  // SW_OVERALL: number;
  // SW_INCGRP: number;
}