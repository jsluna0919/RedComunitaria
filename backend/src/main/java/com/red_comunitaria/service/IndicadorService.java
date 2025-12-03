package com.red_comunitaria.service;

import com.red_comunitaria.dto.IndicadorDTO;
import com.red_comunitaria.repository.IndicadorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IndicadorService {

    private final IndicadorRepository repository;

    public IndicadorService(IndicadorRepository repository) {
        this.repository = repository;
    }

    public Optional<IndicadorDTO> obtenerIndicadorPorId(String id){
        return Optional.of(repository.findById(id)
                .map(i-> new IndicadorDTO(
                        i.getNum(),
                        i.getNombre(),
                        i.getNivel(),
                        i.getTipo(),
                        i.getPerfil(),
                        i.getDescription(),
                        i.getFuente(),
                        i.getWeb()
                ))).orElseThrow(() -> new RuntimeException("Pais no encontrado con id: " + id));
    }

    public List<IndicadorDTO> obtenerIndicadores(){
        return repository.findAll()
                .stream()
                .map( i-> new IndicadorDTO(
                        i.getNum(),
                        i.getNombre(),
                        i.getNivel(),
                        i.getTipo(),
                        i.getPerfil(),
                        i.getDescription(),
                        i.getFuente(),
                        i.getWeb()
                )).toList();
    }

}