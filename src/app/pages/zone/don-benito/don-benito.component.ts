import { Component } from '@angular/core';

@Component({
  selector: 'app-don-benito',
  imports: [],
  templateUrl: './don-benito.component.html',
  styleUrl: './don-benito.component.css',
})
export class DonBenitoComponent {
  rutas = [
    {
      nombre: 'Paseo del Río Guadiana',
      salida: 'Don Benito',
      llegada: 'Riberas del Guadiana',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/don-benito/paseo-guadiana.webp',
      maps: 'https://www.google.com/maps/search/Rio+Guadiana+Don+Benito',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Canal del Zújar',
      salida: 'Don Benito',
      llegada: 'Canal del Zújar',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/canal-zujar.jpg',
      maps: 'https://www.google.com/maps/search/Canal+del+Zujar+Don+Benito',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero de las Vegas Altas',
      salida: 'Don Benito',
      llegada: 'Zonas agrícolas del entorno',
      km: 8,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/vegas-altas.jpg',
      maps: 'https://www.google.com/maps/search/Vegas+Altas+Guadiana',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Embalse de Orellana',
      salida: 'Orellana la Vieja',
      llegada: 'Embalse de Orellana',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/embalse-de-orellana.webp',
      maps: 'https://www.google.com/maps/search/Embalse+de+Orellana',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Zújar',
      salida: 'Don Benito',
      llegada: 'Río Zújar',
      km: 9,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Lineal',
      imagen: 'images/don-benito/sendero-zujar.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Zujar',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de las Lagunas de Don Benito',
      salida: 'Don Benito',
      llegada: 'Lagunas naturales',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/lagunas-de-donbenito.jpg',
      maps: 'https://www.google.com/maps/search/Lagunas+de+Don+Benito',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Camino de Magacela',
      salida: 'Don Benito',
      llegada: 'Magacela',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Lineal',
      imagen: 'images/don-benito/camino-magacela.jpg',
      maps: 'https://www.google.com/maps/search/Magacela+Badajoz',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Cerro de San Cristóbal',
      salida: 'Magacela',
      llegada: 'Cerro de San Cristóbal',
      km: 5,
      dificultad: 'Media',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/cerro-san-cristobal.jpg',
      maps: 'https://www.google.com/maps/search/Cerro+de+San+Cristobal+Magacela',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de los Molinos del Guadiana',
      salida: 'Don Benito',
      llegada: 'Antiguos molinos',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/molinos-guadiana.webp',
      maps: 'https://www.google.com/maps/search/Molinos+Guadiana+Don+Benito',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta Nocturna Urbana de Don Benito',
      salida: 'Centro de Don Benito',
      llegada: 'Casco urbano',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/don-benito/nocturna-don-benito.png',
      maps: 'https://www.google.com/maps/search/Don+Benito+noche',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
  ];
}
