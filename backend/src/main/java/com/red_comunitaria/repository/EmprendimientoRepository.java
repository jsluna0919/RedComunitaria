package com.red_comunitaria.repository;

import com.red_comunitaria.model.EmprendimientoEntity;
import com.red_comunitaria.model.PaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmprendimientoRepository extends JpaRepository<EmprendimientoEntity, Integer> {

    @Query("""
        select e
        from EmprendimientoEntity e
        join fetch e.pais p
        join fetch e.usuario u
        where p.iso3 = :iso3
        """)
    List<EmprendimientoEntity> findByPaisIso3(@Param("iso3") String iso3);
}
