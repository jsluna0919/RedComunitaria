package com.red_comunitaria.controller;

import com.red_comunitaria.dto.PaisDetalleDTO;
import com.red_comunitaria.service.PaisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/paises")
public class PaisController {

    private final PaisService paisService;

    public PaisController(PaisService paisService) {
        this.paisService = paisService;
    }

    @GetMapping("/{iso3}/detalle")
    public ResponseEntity<?> getDetallePais(@PathVariable String iso3) {
        PaisDetalleDTO detalle = paisService.obtenerDetallePais(iso3);
        return ResponseEntity.ok(
                new ApiResponse<>(true, "Detalle del país " + iso3, detalle)
        );
    }
}
