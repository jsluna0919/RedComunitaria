package com.red_comunitaria.repository;

import com.red_comunitaria.model.MedicionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicionRepository extends JpaRepository<MedicionEntity, Long> {
}
