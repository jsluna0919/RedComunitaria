package com.red_comunitaria.controller;

import com.red_comunitaria.service.MedicionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mediciones")
public class MedicionController {

    private final MedicionService service;

    public MedicionController(MedicionService service) {
        this.service = service;
    }

    @GetMapping("/detalle")
    public ResponseEntity<?> getMediciones(){
        try {
            var mediciones = service.obtenerMedicionesDetalladas();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Mediciones", mediciones));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @GetMapping("/detalle/{iso3}")
    public ResponseEntity<?> getMedicionesPais(@PathVariable String iso3){
        try {
            var mediciones = service.obtenerMedicionesDetalladasPorPais(iso3);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Mediciones", mediciones));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }
}
