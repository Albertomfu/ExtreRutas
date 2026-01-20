import { Component } from '@angular/core';

@Component({
  selector: 'app-las-hurdes',
  imports: [],
  templateUrl: './las-hurdes.component.html',
  styleUrl: './las-hurdes.component.css',
})
export class LasHurdesComponent {
  rutas = [
    {
      nombre: 'Meandro del Melero',
      salida: 'Riolobos de Hurdes',
      llegada: 'Mirador del Melero',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/hurdes/meandro-melero.jpg',
      maps: 'https://www.google.com/maps/search/Meandro+del+Melero',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Río Malvellido',
      salida: 'Caminomorisco',
      llegada: 'Pozas naturales',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/rio-malvellido.webp',
      maps: 'https://www.google.com/maps/search/Rio+Malvellido',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Chorro de la Meancera',
      salida: 'El Gasco',
      llegada: 'Cascada de la Meancera',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/hurdes/chorro-meancera.jpg',
      maps: 'https://www.google.com/maps/search/Chorro+de+la+Meancera',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de las Alquerías',
      salida: 'Casares de las Hurdes',
      llegada: 'Alquerías tradicionales',
      km: 7,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/alquerias.jpg',
      maps: 'https://www.google.com/maps/search/Casares+de+las+Hurdes',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Río Ladrillar',
      salida: 'Las Mestas',
      llegada: 'Río Ladrillar',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/hurdes/ladrillar.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Ladrillar',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de los Miradores Hurdano',
      salida: 'Pinofranqueado',
      llegada: 'Miradores del valle',
      km: 8,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/miradores-hurdanos.jpg',
      maps: 'https://www.google.com/maps/search/Pinofranqueado',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Volcán del Gasco',
      salida: 'El Gasco',
      llegada: 'Cráter volcánico',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/volcan-del-gasco.jpg',
      maps: 'https://www.google.com/maps/search/Volcan+del+Gasco',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero de la Fragosa',
      salida: 'Ovejuela',
      llegada: 'Cascada de Ovejuela',
      km: 6,
      dificultad: 'Media',
      duracion: '2,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/hurdes/sendero-fragosa.jpg',
      maps: 'https://www.google.com/maps/search/Cascada+de+Ovejuela',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Río Esperabán',
      salida: 'Vegas de Coria',
      llegada: 'Charcos naturales',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/ruta-rio-esperaban.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Esperaban',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de los Canchos de Ramiro',
      salida: 'Caminomorisco',
      llegada: 'Zona ZEPA',
      km: 9,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Circular',
      imagen: 'images/hurdes/Canchos_de_Ramiro.jpg',
      maps: 'https://www.google.com/maps/search/Canchos+de+Ramiro',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
  ];
}
