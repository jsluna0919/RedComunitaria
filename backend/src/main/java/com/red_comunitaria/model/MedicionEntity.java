package com.red_comunitaria.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name="mediciones")
public class MedicionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "iso3", referencedColumnName = "iso3", nullable = false)
    private PaisEntity pais;

    @ManyToOne
    @JoinColumn(name = "num", referencedColumnName = "num", nullable = false)
    private IndicadorEntity indicador;

    private Integer datayr;

    @Column(name = "value_screen")
    private BigDecimal valueScreen;

    private BigDecimal score;

    private Integer rank;

    // ======================
    // Getters y Setters
    // ======================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PaisEntity getPais() {
        return pais;
    }

    public void setPais(PaisEntity pais) {
        this.pais = pais;
    }

    public IndicadorEntity getIndicador() {
        return indicador;
    }

    public void setIndicador(IndicadorEntity indicador) {
        this.indicador = indicador;
    }

    public Integer getDatayr() {
        return datayr;
    }

    public void setDatayr(Integer datayr) {
        this.datayr = datayr;
    }

    public BigDecimal getValueScreen() {
        return valueScreen;
    }

    public void setValueScreen(BigDecimal valueScreen) {
        this.valueScreen = valueScreen;
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    // ======================
    // Contrusctor
    // ======================


    public MedicionEntity(Long id, PaisEntity pais, IndicadorEntity indicador, Integer datayr, BigDecimal valueScreen, BigDecimal score, Integer rank) {
        this.id = id;
        this.pais = pais;
        this.indicador = indicador;
        this.datayr = datayr;
        this.valueScreen = valueScreen;
        this.score = score;
        this.rank = rank;
    }

    public MedicionEntity() {}
}
