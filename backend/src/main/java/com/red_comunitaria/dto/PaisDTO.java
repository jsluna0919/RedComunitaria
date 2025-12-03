package com.red_comunitaria.dto;

import java.math.BigDecimal;

public record PaisDTO (
        String id,
        String nombrePais,
        String region,
        String regionCod,
        String ingreso,
        Integer poblacion,
        BigDecimal pppgdp,
        BigDecimal ppppc
){
}
