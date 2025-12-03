package com.red_comunitaria.model;

import jakarta.persistence.*;
import lombok.Builder;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "emprendimientos")
@Builder
public class EmprendimientoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "iso3", referencedColumnName = "iso3", nullable = false)
    private PaisEntity pais;

    private String nombre;

    @Column(name = "anio_fundacion")
    private Integer anioFundacion;

    @Column(name = "sitio_web")
    private String sitioWeb;

    private String descripcion;

    private String sector;

    @Column(name = "creado_en")
    @CreationTimestamp
    private LocalDateTime creadoEn;

    // Relación muchos a uno
    @ManyToOne
    @JoinColumn(name = "creado_por", referencedColumnName = "id", nullable = false)
    private UsuarioEntity usuario;

    public EmprendimientoEntity(Integer id, PaisEntity pais, String nombre, Integer anioFundacion, String sitioWeb, String descripcion, String sector, LocalDateTime fecha, UsuarioEntity usuario) {
        this.id = id;
        this.pais = pais;
        this.nombre = nombre;
        this.anioFundacion = anioFundacion;
        this.sitioWeb = sitioWeb;
        this.descripcion = descripcion;
        this.sector = sector;
        this.creadoEn = creadoEn;
        this.usuario = usuario;
    }

    public EmprendimientoEntity() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PaisEntity getPais() {
        return pais;
    }

    public void setPais(PaisEntity pais) {
        this.pais = pais;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getAnioFundacion() {
        return anioFundacion;
    }

    public void setAnioFundacion(Integer anioFundacion) {
        this.anioFundacion = anioFundacion;
    }

    public String getSitioWeb() {
        return sitioWeb;
    }

    public void setSitioWeb(String sitioWeb) {
        this.sitioWeb = sitioWeb;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public LocalDateTime getCreadoEn() {
        return creadoEn;
    }

    public void setCreadoEn(LocalDateTime creadoEn) {
        this.creadoEn = creadoEn;
    }

    public UsuarioEntity getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioEntity usuario) {
        this.usuario = usuario;
    }
}