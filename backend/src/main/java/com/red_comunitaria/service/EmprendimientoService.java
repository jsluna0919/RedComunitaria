package com.red_comunitaria.service;

import com.red_comunitaria.dto.CrearEmprendimientoDTO;
import com.red_comunitaria.dto.EmprendimientoDTO;
import com.red_comunitaria.model.EmprendimientoEntity;
import com.red_comunitaria.repository.EmprendimientoRepository;
import com.red_comunitaria.repository.PaisRepository;
import com.red_comunitaria.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmprendimientoService {

    private final EmprendimientoRepository repository;
    private final PaisRepository paisRepository;
    private final UsuarioRepository usuarioRepository;

    public Optional<EmprendimientoDTO>  getEmprendimiento(Integer id) {
        return Optional.of(repository.findById(id)
                .map(e-> new EmprendimientoDTO(
                        e.getId(),
                        e.getPais().getIso3(),
                        e.getNombre(),
                        e.getAnioFundacion(),
                        e.getSitioWeb(),
                        e.getDescripcion(),
                        e.getSector(),
                        e.getCreadoEn(),
                        e.getUsuario().getId()
                )).orElseThrow(() -> new RuntimeException("Emprendimiento no encontrado com o id: " + id)));
    }

    public List<EmprendimientoDTO> getEmprendimientos() {
        return repository.findAll()
                .stream()
                .map(e-> new EmprendimientoDTO(
                        e.getId(),
                        e.getPais().getIso3(),
                        e.getNombre(),
                        e.getAnioFundacion(),
                        e.getSitioWeb(),
                        e.getDescripcion(),
                        e.getSector(),
                        e.getCreadoEn(),
                        e.getUsuario().getId()
                )).toList();
    }

    public List<EmprendimientoDTO> getEmprendimientosPorPais(String iso3) {
        return repository.findByPaisIso3(iso3)
                .stream()
                .map(e-> new EmprendimientoDTO(
                        e.getId(),
                        e.getPais().getIso3(),
                        e.getNombre(),
                        e.getAnioFundacion(),
                        e.getSitioWeb(),
                        e.getDescripcion(),
                        e.getSector(),
                        e.getCreadoEn(),
                        e.getUsuario().getId()
                )).toList();
    }

    @Transactional
    public EmprendimientoEntity crearEmprendimiento(CrearEmprendimientoDTO dto) {

        var pais = paisRepository.findById(dto.iso3())
                .orElseThrow(() -> new RuntimeException("Pais no encontrado"));

        var usuario = usuarioRepository.findById(dto.usuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        var emprendimiento = EmprendimientoEntity.builder()
                .pais(pais)
                .nombre(dto.nombre())
                .anioFundacion(dto.anioFundacion())
                .sitioWeb(dto.sitioWeb())
                .descripcion(dto.descripcion())
                .sector(dto.sector())
                .creadoEn(LocalDateTime.now())
                .usuario(usuario)
                .build();

        return repository.save(emprendimiento);
    }

    public void deleteEmprendimiento(Integer id) {
        repository.deleteById(id);
    }
}
