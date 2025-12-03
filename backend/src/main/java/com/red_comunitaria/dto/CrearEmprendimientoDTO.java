package com.red_comunitaria.dto;

import com.red_comunitaria.model.UsuarioEntity;

import java.time.LocalDateTime;

public record CrearEmprendimientoDTO(
        String iso3,
        String nombre,
        Integer anioFundacion,
        String sitioWeb,
        String descripcion,
        String sector,
        LocalDateTime creadoEn,
        Integer usuario
) {
}
