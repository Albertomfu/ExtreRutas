import { Component } from '@angular/core';

@Component({
  selector: 'app-la-vera',
  standalone: true,
  imports: [],
  templateUrl: './la-vera.component.html',
  styleUrls: ['./la-vera.component.css'],
})
export class LaVeraComponent {
  rutas = [
    {
      nombre: 'Garganta de Cuartos',
      salida: 'Losar de la Vera',
      llegada: 'Cascada de Cuartos',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/vera/garganta_de_cuartos.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+de+Cuartos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/losar-de-la-vera-a-garganta-de-cuartos-62917516',
    },
    {
      nombre: 'Ruta de las Gargantas',
      salida: 'Madrigal de la Vera',
      llegada: 'Garganta de Alardos',
      km: 9,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/vera/garganta-alardos.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+de+Alardos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/madrigal-de-la-vera-garganta-de-alardos-42870958',
    },
    {
      nombre: 'Ruta Carlos V',
      salida: 'Cuacos de Yuste',
      llegada: 'Jarandilla de la Vera',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Lineal',
      imagen: 'images/vera/ruta-carlosV.jpg',
      maps: 'https://www.google.com/maps/search/Ruta+Carlos+V+Yuste',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/cuacos-de-yuste-y-ruta-carlos-v-xxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
    {
      nombre: 'Garganta Mayor',
      salida: 'Garganta la Olla',
      llegada: 'Piscinas naturales',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/vera/garganta-mayor.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+la+Olla',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/madrigal-de-la-vera-piscina-natural-puente-romano-y-garganta-alardos-155370556',
    },
    {
      nombre: 'Sendero del Trabuquete',
      salida: 'Guijo de Santa Bárbara',
      llegada: 'Mirador del Trabuquete',
      km: 8,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/vera/Sendero-del-trabuquete.jpg',
      maps: 'https://www.google.com/maps/search/Guijo+de+Santa+Barbara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/guijo-de-santa-barbara-ruta-del-trabuquete-el-campanario-ntra-sra-nieves-guijo-5550007',
    },
    {
      nombre: 'Ruta de las Nogaledas',
      salida: 'Navaconcejo',
      llegada: 'Cascadas de las Nogaledas',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/vera/Ruta-de-las-nogaledas.jpg',
      maps: 'https://www.google.com/maps/search/Cascadas+de+las+Nogaledas',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/navaconcejo-cascadas-nogaledas-xxxxxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
    {
      nombre: 'Ruta del Emperador',
      salida: 'Cuacos de Yuste',
      llegada: 'Monasterio de Yuste',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/vera/ruta-del-emperador.webp',
      maps: 'https://www.google.com/maps/search/Monasterio+de+Yuste',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/monasterio-de-yuste-cuacos-de-yuste-xxxxxxxx',
    },
    {
      nombre: 'Garganta de Minchones',
      salida: 'Villanueva de la Vera',
      llegada: 'Charcos naturales',
      km: 7,
      dificultad: 'Media',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/vera/garganta-minchones.jpg',
      maps: 'https://www.google.com/maps/search/Villanueva+de+la+Vera',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/villanueva-de-la-vera-garganta-minchones-xxxxxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
    {
      nombre: 'Ruta del Piornal',
      salida: 'Piornal',
      llegada: 'Miradores del Valle',
      km: 11,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/vera/ruta-piornal.jpg',
      maps: 'https://www.google.com/maps/search/Piornal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/piornal-miradores-valle-xxxxxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
    {
      nombre: 'Sendero del Tiétar',
      salida: 'Talaveruela',
      llegada: 'Río Tiétar',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/vera/sendero-del-tietar.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Tietar',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/talaveruela-rio-tietar-xxxxxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
  ];
}
