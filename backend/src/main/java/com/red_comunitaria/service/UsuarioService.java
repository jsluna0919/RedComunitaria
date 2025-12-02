package com.red_comunitaria.service;

import com.red_comunitaria.model.UsuarioEntity;
import com.red_comunitaria.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

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

    public UsuarioEntity save(UsuarioEntity usuario) {
        return repository.save(usuario);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }

    public UsuarioEntity modificar(Integer id, UsuarioEntity usuario) {

        UsuarioEntity entity = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        entity.setNombreUsuario(usuario.getNombreUsuario());
        entity.setTelefono(usuario.getTelefono());
        entity.setEmail(usuario.getEmail());
        entity.setContrasenia(usuario.getContrasenia());
        entity.setRol(usuario.getRol());

        UsuarioEntity guardado = repository.save(entity);

        return guardado;
    }


}
