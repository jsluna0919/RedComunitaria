package com.red_comunitaria.repository;

import com.red_comunitaria.model.MedicionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicionRepository extends JpaRepository<MedicionEntity, Long> {

    @Query("""
        select m
        from MedicionEntity m
        join fetch m.pais p
        join fetch m.indicador i
        order by p.iso3, i.num, m.datayr
    """)
    List<MedicionEntity> findMedicionesDetalladas();

    @Query("""
        SELECT m
        FROM MedicionEntity m
        JOIN m.pais p
        JOIN m.indicador i
        WHERE p.iso3 = :iso3
        ORDER BY i.num, m.datayr
    """)
    List<MedicionEntity> findMedicionesDetalladasPorPais(String iso3);
}
