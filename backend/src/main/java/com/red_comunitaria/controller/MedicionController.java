package com.red_comunitaria.controller;

import com.red_comunitaria.service.MedicionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mediciones")
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/all")
    public ResponseEntity<?> getAllMediciones(){
        try {
            var mediciones = service.obtenerMediciones();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Mediciones", mediciones));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMedicionById(@PathVariable Long id){
        try {
            var medicion = service.obtenerMedicionPorId(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Medicion", medicion));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }
}
