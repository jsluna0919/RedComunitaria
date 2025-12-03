package com.red_comunitaria.controller;

import com.red_comunitaria.dto.CrearEmprendimientoDTO;
import com.red_comunitaria.service.EmprendimientoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/emprendimientos")
@RequiredArgsConstructor
public class EmpredimientoController {

    private final EmprendimientoService service;

    @GetMapping("/all")
    public ResponseEntity<?> getAllEmprendimiento(){
        try {
            var emprendimientos = service.getEmprendimientos();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Emprendimientos", emprendimientos));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEmprendimientoById(@PathVariable Integer id){
        var emprendimiento = service.getEmprendimiento(id);
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Emprendimiento", emprendimiento));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @GetMapping("/pais/{iso3}")
    public ResponseEntity<?> getEmprendimientoByIso3(@PathVariable String iso3){
        try {
            var emprendimientos = service.getEmprendimientosPorPais(iso3);
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(true, "Emprendimientos del pais: " + iso3, emprendimientos));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crarEmprendimiento(CrearEmprendimientoDTO dto){
        try {
            var emprendimiento = service.crearEmprendimiento(dto);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(new ApiResponse<>(true, "Emprendimiento creado", emprendimiento));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al crear emprendimiento", e.getMessage()));
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarEmprendimiento(@PathVariable Integer id){
        try {
            service.deleteEmprendimiento(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Emprendimiento eliminado", id));
        }catch(Exception e){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al eliminar emprendimiento", e.getMessage()));
        }
    }

}
