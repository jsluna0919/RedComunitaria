package com.red_comunitaria.dto;

public record UsuarioDTO(
        Integer id,
        String nombreUsuario,
        String telefono,
        String email,
        String rol
) {
}
