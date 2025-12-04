import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { CrearUsuario } from './crear';

// --- INTERFACES ---
// Define la estructura del objeto que se enviará (similar a tu JSON)
interface UsuarioForm {
    nombreUsuario: string;
    telefono: string;
    email: string;
    contrasenia: string;
    rol: 'ADMIN' | 'USER' | 'GUEST'; // Definimos roles posibles
}

@Component({
    selector: 'app-form-user',
    imports: [
        CommonModule,
        FormsModule // 🎯 Importamos FormsModule para usar ngModel
    ],
    standalone: true,
    templateUrl: './form-user.html', 
    styleUrls: ['./form-user.css'], 
})
export class FormUser implements OnInit {

    // 1. Inicialización del modelo de datos del formulario
    public usuario: UsuarioForm = {
        nombreUsuario: '',
        telefono: '',
        email: '',
        contrasenia: '',
        rol: 'USER', // Valor predeterminado
    };
    
    // 2. Lista de roles disponibles
    public rolesDisponibles = ['ADMIN', 'USER', 'GUEST'];


    usuarioNuevo: CrearUsuario={
        nombreUsuario: '',
        telefono: '',
        email: ',',
        contrasenia: '',
        rol: ''
    }
    constructor( private service: Usuario, private router: Router) { }

    guardarUsuario(){
        this.service.usuarioCrear(this.usuario).subscribe({
            next: res => {
                console.log('Pedido creado', res)
                alert('✅ Pedido creado con éxito')
            },error: err => {
                console.error(err)
                alert('❌ Error al crear el pedido');
            }
        })
    }

    ngOnInit(): void {
    }

    // 3. Función para manejar el envío del formulario
    onSubmit(): void {
        // En un entorno real, aquí se enviaría 'this.usuario' al backend.
        
        console.log('✅ Formulario de usuario enviado con éxito:');
        console.log(this.usuario);

        // Opcional: Reiniciar el formulario
        // this.usuario = { ...valoresIniciales };
    }
}
