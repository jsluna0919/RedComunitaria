package com.red_comunitaria.service;

import com.red_comunitaria.dto.CrearUsusarioDTO;
import com.red_comunitaria.dto.UsuarioDTO;
import com.red_comunitaria.model.UsuarioEntity;
import com.red_comunitaria.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public Optional<UsuarioEntity> findById(Integer id) {
        return this.repository.findById(id);
    }

    public UsuarioEntity findByEmail(String email) {
        return this.repository.findByEmail(email);
    }

    public List<UsuarioDTO> findAll() {
        return repository.findAll()
                .stream()
                .map(u -> new UsuarioDTO(
                        u.getId(),
                        u.getNombreUsuario(),
                        u.getTelefono(),
                        u.getEmail(),
                        u.getRol()
                )).toList();
    }

    public UsuarioEntity save(CrearUsusarioDTO dto) {

        var usuario = UsuarioEntity.builder()
                .nombreUsuario(dto.nombreUsuario())
                .telefono(dto.telefono())
                .email(dto.email())
                .contrasenia(dto.contrasenia())
                .rol(dto.rol())
                .build();

        return  repository.save(usuario);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public UsuarioEntity modificar(Integer id, CrearUsusarioDTO dto) {

        var usuario = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if(dto.nombreUsuario() != null && !usuario.getNombreUsuario().isBlank()){
            usuario.setNombreUsuario(dto.nombreUsuario());
        }
        if(dto.telefono() != null && !usuario.getTelefono().isBlank()){
            usuario.setTelefono(dto.telefono());
        }
        if(dto.email() != null && !usuario.getEmail().isBlank()){
            usuario.setEmail(dto.email());
        }
        if(dto.contrasenia() != null && !usuario.getContrasenia().isBlank()){
            usuario.setContrasenia(dto.contrasenia());
        }
        if(dto.rol() != null && !usuario.getRol().isBlank()){
            usuario.setRol(dto.rol());
        }

        return repository.save(usuario);
    }

}