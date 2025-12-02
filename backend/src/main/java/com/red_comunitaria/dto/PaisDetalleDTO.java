package com.red_comunitaria.dto;


import java.math.BigDecimal;
import java.util.List;

public record PaisDetalleDTO(
        String iso3,
        String nombre,
        String region,
        Integer poblacion,
        List<MedicionDTO> mediciones,
        List<EmprendimientoDTO> emprendimientos
) {
    public static record MedicionDTO(
            String indicadorCodigo,
            String indicadorNombre,
            Integer anio,
            BigDecimal valueScreen,
            BigDecimal score,
            Integer rank
    ) {}

    public static record EmprendimientoDTO(
            Integer id,
            String nombre,
            String descripcion,
            String sector,
            Integer anioFundacion,
            String sitioWeb,
            String creadoPor
    ) {}
}
