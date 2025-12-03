package com.red_comunitaria.controller;

import com.red_comunitaria.service.IndicadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/indicadores")
@RequiredArgsConstructor
public class IndicadorController {

    private final IndicadorService service;

    @GetMapping("/{num}")
    public ResponseEntity obtenerIndicador(@PathVariable String num) {
        try {
            var indicador = service.obtenerIndicadorPorId(num);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Indicador encontrado", indicador));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

    @GetMapping("/all")
    public ResponseEntity obtenerIndicadores() {
        try {
            var indicadores = service.obtenerIndicadores();
            return  ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Indicadores", indicadores));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error", e.getMessage()));
        }
    }

}
