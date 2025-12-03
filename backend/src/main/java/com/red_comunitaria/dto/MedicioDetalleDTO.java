package com.red_comunitaria.dto;

import java.math.BigDecimal;

public record MedicioDetalleDTO(
        String iso3,
        String nombrePais,
        String indicadorCodigo,
        String indicadorNombre,
        Integer anio,
        BigDecimal valueScreen,
        BigDecimal score,
        Integer rank
) {
}
