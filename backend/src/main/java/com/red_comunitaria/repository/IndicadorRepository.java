package com.red_comunitaria.repository;

import com.red_comunitaria.model.IndicadorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndicadorRepository extends JpaRepository<IndicadorEntity, String> {
}