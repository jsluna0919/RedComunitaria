package com.red_comunitaria.dto;

import com.red_comunitaria.model.IndicadorEntity;
import com.red_comunitaria.model.PaisEntity;
import lombok.Builder;

import java.math.BigDecimal;

@Builder
public record MedicionDTO (
        Long id,
        PaisEntity iso3,
        IndicadorEntity num,
        Integer dataYr,
        BigDecimal valueScreen,
        BigDecimal score,
        Integer rank
){
}
