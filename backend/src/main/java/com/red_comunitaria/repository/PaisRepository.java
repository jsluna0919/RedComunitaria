package com.red_comunitaria.repository;


import com.red_comunitaria.model.PaisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaisRepository extends JpaRepository<PaisEntity, Long> {

    @Query("""
        select distinct p
        from PaisEntity p
        left join fetch p.mediciones m
        left join fetch m.indicador
        left join fetch p.emprendimientos e
        left join fetch e.usuario
        where p.iso3 = :iso3
        """)
    PaisEntity findDetalleByIso3(@Param("iso3") String iso3);
}