package com.red_comunitaria.service;

import com.red_comunitaria.dto.PaisDetalleDTO;
import com.red_comunitaria.model.PaisEntity;
import com.red_comunitaria.repository.PaisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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



}
