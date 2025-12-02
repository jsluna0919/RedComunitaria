package com.red_comunitaria.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="indicadores")
public class IndicadorEntity {

    @Id
    private String num;

    private String nombre;
    private String nivel;
    private String tipo;
    private String perfil;
    private String descripcion;
    private String fuente;
    private String web;

    @OneToMany(mappedBy = "indicador", cascade = CascadeType.ALL)
    private List<MedicionEntity> mediciones = new ArrayList<>();

    // ---------- CONSTRUCTORES ----------

    public IndicadorEntity() {
    }

    public IndicadorEntity(String num, String nombre, String nivel, String tipo,
                           String perfil, String description, String fuente, String web) {
        this.num = num;
        this.nombre = nombre;
        this.nivel = nivel;
        this.tipo = tipo;
        this.perfil = perfil;
        this.descripcion = description;
        this.fuente = fuente;
        this.web = web;
    }

    // ---------- GETTERS Y SETTERS ----------

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getDescription() {
        return descripcion;
    }

    public void setDescription(String description) {
        this.descripcion = description;
    }

    public String getFuente() {
        return fuente;
    }

    public void setFuente(String fuente) {
        this.fuente = fuente;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

    public List<MedicionEntity> getMediciones() {
        return mediciones;
    }

    public void setMediciones(List<MedicionEntity> mediciones) {
        this.mediciones = mediciones;
    }
}