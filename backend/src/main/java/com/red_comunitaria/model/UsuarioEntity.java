package com.red_comunitaria.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name="usuarios")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre")
    private String nombreUsuario;

    private String telefono;

    private String email;

    private String contrasenia;

    private String rol;


    @OneToMany(mappedBy = "usuario", fetch = FetchType.EAGER)
    private List<EmprendimientoEntity> emprendimientos = new ArrayList<>();

    //Getter and Setter

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombre_usuario) {
        this.nombreUsuario = nombre_usuario;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }


    //Constructor

    public UsuarioEntity(Integer id, String nombre_usuario, String telefono, String contrasenia, String email, String rol) {
        this.id = id;
        this.nombreUsuario = nombre_usuario;
        this.telefono = telefono;
        this.contrasenia = contrasenia;
        this.email = email;
        this.rol = rol;
    }
}