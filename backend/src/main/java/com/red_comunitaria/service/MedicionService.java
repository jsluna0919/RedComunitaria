package com.red_comunitaria.service;

import com.red_comunitaria.dto.MedicioDetalleDTO;
import com.red_comunitaria.dto.PaisDetalleDTO;
import com.red_comunitaria.repository.MedicionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicionService {

    private final MedicionRepository repository;

    public List<MedicioDetalleDTO> obtenerMedicionesDetalladas(){
        return repository.findMedicionesDetalladas()
                .stream()
                .map(m -> new MedicioDetalleDTO(
                        m.getPais().getIso3(),
                        m.getPais().getNombrePais(),
                        m.getIndicador().getNum(),
                        m.getIndicador().getNombre(),
                        m.getDatayr(),
                        m.getValueScreen(),
                        m.getScore(),
                        m.getRank()
                )).toList();
    }

    public List<MedicioDetalleDTO> obtenerMedicionesDetalladasPorPais(String iso){
        return repository.findMedicionesDetalladasPorPais(iso)
                .stream()
                .map(m -> new MedicioDetalleDTO(
                        m.getPais().getIso3(),
                        m.getPais().getNombrePais(),
                        m.getIndicador().getNum(),
                        m.getIndicador().getNombre(),
                        m.getDatayr(),
                        m.getValueScreen(),
                        m.getScore(),
                        m.getRank()
                )).toList();

    }
}