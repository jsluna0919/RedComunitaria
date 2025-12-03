package com.red_comunitaria.service;

import com.red_comunitaria.dto.PaisDTO;
import com.red_comunitaria.dto.PaisDetalleDTO;
import com.red_comunitaria.model.PaisEntity;
import com.red_comunitaria.repository.PaisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaisService {

    private final PaisRepository repository;

    // 1. Métod público que usará el controller
    public PaisDetalleDTO  obtenerDetallePais(String id) {
        PaisEntity pais = repository.findDetalleByIso3(id);
        return mapearAPaisDetalleDTO(pais);
    }

    // 2. Mapper privado: de Entity -> DTO
    private PaisDetalleDTO mapearAPaisDetalleDTO(PaisEntity pais) {

        // Mapear mediciones
        List<PaisDetalleDTO.MedicionDTO> medicionesDTO = pais.getMediciones().stream()
                .map(m -> new PaisDetalleDTO.MedicionDTO(
                        m.getIndicador().getNum(),          // indicadorCodigo
                        m.getIndicador().getNombre(),       // indicadorNombre
                        m.getDatayr(),                       // anio
                        m.getValueScreen(),                 // valueScreen
                        m.getScore(),                       // score
                        m.getRank()                         // rank
                ))
                .toList();

        // Mapear emprendimientos
        List<PaisDetalleDTO.EmprendimientoDTO> emprendimientosDTO = pais.getEmprendimientos().stream()
                .map(e -> new PaisDetalleDTO.EmprendimientoDTO(
                        e.getId(),
                        e.getNombre(),
                        e.getDescripcion(),
                        e.getSector(),
                        e.getAnioFundacion(),
                        e.getSitioWeb(),
                        e.getUsuario().getNombreUsuario() // creadoPor
                ))
                .toList();

        // Armar DTO raíz
        return new PaisDetalleDTO(
                pais.getIso3(),
                pais.getNombrePais(),
                pais.getRegion(),
                pais.getPoblacion(),
                medicionesDTO,
                emprendimientosDTO
        );
    }

    public Optional<PaisDTO> obtenerPais(String id) {
        return Optional.ofNullable(repository.findById(id)
                .map(p -> new PaisDTO(
                        p.getIso3(),
                        p.getNombrePais(),
                        p.getRegion(),
                        p.getRegionCod(),
                        p.getIngreso(),
                        p.getPoblacion(),
                        p.getPppgdp(),
                        p.getPpppc()
                )).orElseThrow(() -> new RuntimeException("Pais no encontrado con id: " + id)));
    }

    public List<PaisDTO> obtenerPaises() {
        return repository.findAll()
                .stream()
                .map(p -> new PaisDTO(
                        p.getIso3(),
                        p.getNombrePais(),
                        p.getRegion(),
                        p.getRegionCod(),
                        p.getIngreso(),
                        p.getPoblacion(),
                        p.getPppgdp(),
                        p.getPpppc()
                )).toList();
    }



}
