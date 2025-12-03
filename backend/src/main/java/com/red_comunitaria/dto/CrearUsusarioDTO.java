package com.red_comunitaria.dto;

public record CrearUsusarioDTO (
        String nombreUsuario,
        String telefono,
        String email,
        String contrasenia,
        String rol
){
}