package com.red_comunitaria.repository;

import com.red_comunitaria.model.EmprendimientoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmprendimientoRepository extends JpaRepository<EmprendimientoEntity, Long> {
}
