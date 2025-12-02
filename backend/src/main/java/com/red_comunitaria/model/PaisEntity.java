package com.red_comunitaria.model;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name="paises")
public class PaisEntity {

    @Id
    @Column(name = "iso3", length = 3)
    private String iso3;

    @Column(name="nombre")
    private String nombrePais;

    private String region;

    private String regionCod;

    private String ingreso;

    private Integer poblacion;

    private BigDecimal pppgdp;

    private BigDecimal ppppc;

    @OneToMany(mappedBy = "pais", fetch =  FetchType.LAZY)
    private Set<EmprendimientoEntity> emprendimientos = new HashSet<>();

    @OneToMany(mappedBy = "pais",  fetch =  FetchType.LAZY)
    private Set<MedicionEntity> mediciones = new HashSet<>();

    // Getters y Setters
    // ======================

    public String getIso3() { return iso3; }
    public void setIso3(String iso3) { this.iso3 = iso3; }

    public String getNombrePais() { return nombrePais; }
    public void setNombrePais(String nombrePais) { this.nombrePais = nombrePais; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }

    public String getRegionCod() { return regionCod; }
    public void setRegionCod(String regionCod) { this.regionCod = regionCod; }

    public String getIngreso() { return ingreso; }
    public void setIngreso(String ingreso) { this.ingreso = ingreso; }

    public Integer getPoblacion() { return poblacion; }
    public void setPoblacion(Integer poblacion) { this.poblacion = poblacion; }

    public BigDecimal getPppgdp() { return pppgdp; }
    public void setPppgdp(BigDecimal pppgdp) { this.pppgdp = pppgdp; }

    public BigDecimal getPpppc() { return ppppc; }
    public void setPpppc(BigDecimal ppppc) { this.ppppc = ppppc; }

    public PaisEntity(String iso3, String nombrePais, String region, String regionCod,
                      String ingreso, Integer poblacion, BigDecimal pppgdp, BigDecimal ppppc) {
        this.iso3 = iso3;
        this.nombrePais = nombrePais;
        this.region = region;
        this.regionCod = regionCod;
        this.ingreso = ingreso;
        this.poblacion = poblacion;
        this.pppgdp = pppgdp;
        this.ppppc = ppppc;
    }

    public PaisEntity() {
    }
}