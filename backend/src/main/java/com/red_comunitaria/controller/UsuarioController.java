package com.red_comunitaria.controller;

import com.red_comunitaria.dto.CrearUsusarioDTO;
import com.red_comunitaria.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
class UsuarioController {

    private final UsuarioService service;

    @GetMapping("/id/{id}")
    public ResponseEntity<?>  getUsuario(@PathVariable Integer id) {
        try {
            var usuario = service.findById(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Usuario encontrado", usuario));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<> (false, "Error al obtener el usuario con id: " + id, e.getMessage()));
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<?>  getUsuarioByEmail(@PathVariable String email) {
        try {
            var usuario = service.findByEmail(email);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Usuario encontrado", usuario));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al obtener el usuario con id: " + email, e.getMessage()));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?>  getAllUsuarios() {
        try {
            var usuarios = service.findAll();
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Usuarios", usuarios));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Error al obtener los usuarios", e.getMessage()));
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarUsuario(@PathVariable Integer id) {
        try {
            service.delete(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Usuario eliminado", true));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<> (false, "Error al eliminar el usuario", e.getMessage()));
        }
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crearUsuario(@RequestBody CrearUsusarioDTO usuario) {
        try {
            var crearUsuario = service.save(usuario);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(new ApiResponse<>(true, "Usuario creadado", crearUsuario));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<> (false, "Error al crear el usuario ", e.getMessage()));
        }
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<?> modificarUsuario(@PathVariable Integer id, @RequestBody CrearUsusarioDTO usuario) {
        try {
            var modificarUsuario = service.modificar(id, usuario);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new ApiResponse<>(true, "Usuario modificado", modificarUsuario));

        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<> (false, "Error al modificar el usuario", e.getMessage()));
        }
    }

}