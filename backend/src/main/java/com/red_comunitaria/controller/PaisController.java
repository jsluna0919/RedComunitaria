package com.red_comunitaria.controller;

import com.red_comunitaria.dto.PaisDetalleDTO;
import com.red_comunitaria.service.PaisService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/paises")
@CrossOrigin(origins = "http://localhost:4200")
public class PaisController {

    private final PaisService paisService;

    public PaisController(PaisService paisService) {
        this.paisService = paisService;
    }

    @GetMapping("/{iso3}/detalle")
    public ResponseEntity<?> getDetallePais(@PathVariable String iso3) {
        try {
            PaisDetalleDTO detalle = paisService.obtenerDetallePais(iso3);
            return ResponseEntity.ok(
                    new ApiResponse<>(true, "Detalle del país " + iso3, detalle)
            );
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }

    }

    @GetMapping("/{iso3}")
    public ResponseEntity<?> getPais(@PathVariable String iso3) {
        try {
            var pais = paisService.obtenerPais(iso3);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Pais " + iso3, pais));
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al obtener pais" + iso3, e));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPaises() {
        try {
            var paises = paisService.obtenerPaises();
            return ResponseEntity.ok(new ApiResponse<>(true, "Todos los paises", paises));
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al obtener paises" + e.getMessage(), e));
        }
    }
}