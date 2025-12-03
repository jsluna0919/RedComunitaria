import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

// --- INTERFACES ---
interface EmprendimientoForm {
    iso3: string;
    nombre: string;
    anioFundacion: number | null;
    sitioWeb: string;
    descripcion: string; 
    codigo: number | null;
}

@Component({
    selector: 'app-form',
    imports: [
        CommonModule,
        FormsModule // Importamos FormsModule para usar ngModel en el template
    ],
    // Mantenemos standalone: true implícito (o explícito si deseas añadirlo)
    templateUrl: './form.html', 
    styleUrl: './form.css', 
})
export class Form implements OnInit { // Usamos el nombre de clase 'Form'

    // 1. Inicialización del modelo de datos del formulario
    public emprendimiento: EmprendimientoForm = {
        iso3: 'COL', // Valor predeterminado para el país
        nombre: '',
        anioFundacion: null, 
        sitioWeb: '',
        descripcion: '',
        codigo: null,
    };
    
    // 2. Lista de países/sectores
    public paises = [
        { iso3: 'ALB', nombre: 'Albania' },
        { iso3: 'DZA', nombre: 'Algeria' },
        { iso3: 'ARG', nombre: 'Argentina' },
        { iso3: 'ARM', nombre: 'Armenia' },
        { iso3: 'AUS', nombre: 'Australia' },
        { iso3: 'AUT', nombre: 'Austria' },
        { iso3: 'AZE', nombre: 'Azerbaijan' },
        { iso3: 'BHR', nombre: 'Bahrain' },
        { iso3: 'BGD', nombre: 'Bangladesh' },
        { iso3: 'BLR', nombre: 'Belarus' },
        { iso3: 'BEL', nombre: 'Belgium' },
        { iso3: 'BEN', nombre: 'Benin' },
        { iso3: 'BOL', nombre: 'Bolivia (Plurinational State of)' },
        { iso3: 'BIH', nombre: 'Bosnia and Herzegovina' },
        { iso3: 'BRA', nombre: 'Brazil' },
        { iso3: 'BRN', nombre: 'Brunei Darussalam' },
        { iso3: 'BGR', nombre: 'Bulgaria' },
        { iso3: 'BFA', nombre: 'Burkina Faso' },
        { iso3: 'KHM', nombre: 'Cambodia' },
        { iso3: 'CMR', nombre: 'Cameroon' },
        { iso3: 'CAN', nombre: 'Canada' },
        { iso3: 'CHL', nombre: 'Chile' },
        { iso3: 'CHN', nombre: 'China' },
        { iso3: 'COL', nombre: 'Colombia' },
        { iso3: 'CRI', nombre: 'Costa Rica' },
        { iso3: 'HRV', nombre: 'Croatia' },
        { iso3: 'CYP', nombre: 'Cyprus' },
        { iso3: 'CZE', nombre: 'Czech Republic' },
        { iso3: 'DNK', nombre: 'Denmark' },
        { iso3: 'DOM', nombre: 'Dominican Republic' },
        { iso3: 'ECU', nombre: 'Ecuador' },
        { iso3: 'EGY', nombre: 'Egypt' },
        { iso3: 'SLV', nombre: 'El Salvador' },
        { iso3: 'EST', nombre: 'Estonia' },
        { iso3: 'ETH', nombre: 'Ethiopia' },
        { iso3: 'FIN', nombre: 'Finland' },
        { iso3: 'FRA', nombre: 'France' },
        { iso3: 'GEO', nombre: 'Georgia' },
        { iso3: 'DEU', nombre: 'Germany' },
        { iso3: 'GHA', nombre: 'Ghana' },
        { iso3: 'GRC', nombre: 'Greece' },
        { iso3: 'GTM', nombre: 'Guatemala' },
        { iso3: 'HND', nombre: 'Honduras' },
        { iso3: 'HKG', nombre: 'Hong Kong, China' },
        { iso3: 'HUN', nombre: 'Hungary' },
        { iso3: 'ISL', nombre: 'Iceland' },
        { iso3: 'IND', nombre: 'India' },
        { iso3: 'IDN', nombre: 'Indonesia' },
        { iso3: 'IRN', nombre: 'Iran (Islamic Republic of)' },
        { iso3: 'IRQ', nombre: 'Iraq' },
        { iso3: 'IRL', nombre: 'Ireland' },
        { iso3: 'ISR', nombre: 'Israel' },
        { iso3: 'ITA', nombre: 'Italy' },
        { iso3: 'JAM', nombre: 'Jamaica' },
        { iso3: 'JPN', nombre: 'Japan' },
        { iso3: 'JOR', nombre: 'Jordan' },
        { iso3: 'KAZ', nombre: 'Kazakhstan' },
        { iso3: 'KEN', nombre: 'Kenya' },
        { iso3: 'KOR', nombre: 'Korea, Republic of' },
        { iso3: 'KWT', nombre: 'Kuwait' },
        { iso3: 'KGZ', nombre: 'Kyrgyzstan' },
        { iso3: 'LVA', nombre: 'Latvia' },
        { iso3: 'LBN', nombre: 'Lebanon' },
        { iso3: 'LTU', nombre: 'Lithuania' },
        { iso3: 'LUX', nombre: 'Luxembourg' },
        { iso3: 'MDG', nombre: 'Madagascar' },
        { iso3: 'MWI', nombre: 'Malawi' },
        { iso3: 'MYS', nombre: 'Malaysia' },
        { iso3: 'MLT', nombre: 'Malta' },
        { iso3: 'MRT', nombre: 'Mauritania' },
        { iso3: 'MUS', nombre: 'Mauritius' },
        { iso3: 'MEX', nombre: 'Mexico' },
        { iso3: 'MNG', nombre: 'Mongolia' },
        { iso3: 'MNE', nombre: 'Montenegro' },
        { iso3: 'MAR', nombre: 'Morocco' },
        { iso3: 'MMR', nombre: 'Myanmar' },
        { iso3: 'NPL', nombre: 'Nepal' },
        { iso3: 'NLD', nombre: 'Netherlands' },
        { iso3: 'NZL', nombre: 'New Zealand' },
        { iso3: 'NIC', nombre: 'Nicaragua' },
        { iso3: 'NGA', nombre: 'Nigeria' },
        { iso3: 'MKD', nombre: 'North Macedonia' },
        { iso3: 'NOR', nombre: 'Norway' },
        { iso3: 'OMN', nombre: 'Oman' },
        { iso3: 'PAK', nombre: 'Pakistan' },
        { iso3: 'PAN', nombre: 'Panama' },
        { iso3: 'PRY', nombre: 'Paraguay' },
        { iso3: 'PER', nombre: 'Peru' },
        { iso3: 'PHL', nombre: 'Philippines' },
        { iso3: 'POL', nombre: 'Poland' },
        { iso3: 'PRT', nombre: 'Portugal' },
        { iso3: 'QAT', nombre: 'Qatar' },
        { iso3: 'MDA', nombre: 'Republic of Moldova' },
        { iso3: 'ROU', nombre: 'Romania' },
        { iso3: 'RUS', nombre: 'Russian Federation' },
        { iso3: 'SAU', nombre: 'Saudi Arabia' },
        { iso3: 'SEN', nombre: 'Senegal' },
        { iso3: 'SRB', nombre: 'Serbia' },
        { iso3: 'SGP', nombre: 'Singapore' },
        { iso3: 'SVK', nombre: 'Slovakia' },
        { iso3: 'SVN', nombre: 'Slovenia' },
        { iso3: 'ZAF', nombre: 'South Africa' },
        { iso3: 'ESP', nombre: 'Spain' },
        { iso3: 'SWE', nombre: 'Sweden' },
        { iso3: 'CHE', nombre: 'Switzerland' },
        { iso3: 'THA', nombre: 'Thailand' },
        { iso3: 'TTO', nombre: 'Trinidad and Tobago' },
        { iso3: 'TUN', nombre: 'Tunisia' },
        { iso3: 'TUR', nombre: 'Turkey' },
        { iso3: 'UGA', nombre: 'Uganda' },
        { iso3: 'UKR', nombre: 'Ukraine' },
        { iso3: 'ARE', nombre: 'United Arab Emirates' },
        { iso3: 'GBR', nombre: 'United Kingdom' },
        { iso3: 'TZA', nombre: 'United Republic of Tanzania' },
        { iso3: 'USA', nombre: 'United States of America' },
        { iso3: 'URY', nombre: 'Uruguay' },
        { iso3: 'UZB', nombre: 'Uzbekistan' },
        { iso3: 'VNM', nombre: 'Viet Nam' },
        { iso3: 'YEM', nombre: 'Yemen' },
        { iso3: 'ZMB', nombre: 'Zambia' },
        { iso3: 'ZWE', nombre: 'Zimbabwe' }
    ];

    public sectores = ['Institutions', 'Human capital and research', 'Infrastructure', 'Market sophistication', 'Business sophistication','Knowledge and technology outputs','Creative outputs'];


    constructor() { }

    ngOnInit(): void {
    }

    // 3. Función para manejar el envío del formulario
    onSubmit(): void {
        console.log('✅ Formulario enviado con éxito:');
        console.log(this.emprendimiento);
    }
}