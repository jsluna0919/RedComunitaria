package com.red_comunitaria.service;

import com.red_comunitaria.dto.MedicioDetalleDTO;
import com.red_comunitaria.dto.MedicionDTO;
import com.red_comunitaria.repository.MedicionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public List<MedicionDTO> obtenerMediciones(){
        return repository.findAll()
                .stream()
                .map(m -> new MedicionDTO(
                        m.getId(),
                        m.getPais(),
                        m.getIndicador(),
                        m.getDatayr(),
                        m.getValueScreen(),
                        m.getScore(),
                        m.getRank()
                )).toList();
    }

    public Optional<MedicionDTO> obtenerMedicionPorId(Long id){
        var m1 = repository.findById(id).orElseThrow(()-> new EntityNotFoundException("Medicion no encontrada con el id: " + id));

        return repository.findById(id)
                .map(m -> new MedicionDTO(
                        m.getId(),
                        m.getPais(),
                        m.getIndicador(),
                        m.getDatayr(),
                        m.getValueScreen(),
                        m.getScore(),
                        m.getRank()
                ));
    }
}