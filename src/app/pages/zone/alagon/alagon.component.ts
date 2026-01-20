import { Component } from '@angular/core';

@Component({
  selector: 'app-alagon',
  imports: [],
  templateUrl: './alagon.component.html',
  styleUrl: './alagon.component.css',
})
export class AlagonComponent {
  rutas = [
    {
      nombre: 'Sendero del Río Alagón',
      salida: 'Coria',
      llegada: 'Puente de Hierro',
      km: 8,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/sendero-alagon.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Alagon+Coria',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/coria-ermita-virgen-de-argeme-178646215', // ruta cercana que parte desde el puente del Alagón y recorre la vega del río 📍 :contentReference[oaicite:0]{index=0}
    },
    {
      nombre: 'Ruta de los Canchos',
      salida: 'Acehúche',
      llegada: 'Cancho del Fresno',
      km: 10,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-canchos.jpg',
      maps: 'https://www.google.com/maps/search/Acehuche+senderismo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/campos-y-senderos-por-acehuche-y-alrededores-XXXXXXX', // no hay un track exacto con ese nombre, puedes buscar por Acehúche en Wikiloc 📍 :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Ruta del Embalse de Alcántara',
      salida: 'Alcántara',
      llegada: 'Presa de Alcántara',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alagon/ruta-embalse-alcantara.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alcantara-cantera-circular-XXXXX', // varias rutas en Alcántara disponibles, usa la búsqueda en Wikiloc para elegir la que mejor encaje 📍 :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Sendero de la Dehesa',
      salida: 'Portezuelo',
      llegada: 'Dehesas del Alagón',
      km: 6,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-dehesa.jpg',
      maps: 'https://www.google.com/maps/search/Portezuelo+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-por-dehesas-y-campos-por-guijo-de-galisteo-XXXXXXX', // ruta representativa cerca de Portezuelo/Guijo de Galisteo 📍 :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Ruta del Castro Vetón',
      salida: 'Coria',
      llegada: 'Yacimiento Vetón',
      km: 9,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-castro-veton.jpg',
      maps: 'https://www.google.com/maps/search/Coria+yacimiento',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/coria-casco-antiguo-y-alrededores-60589659', // paseo/circular por Coria que puedes usar como aproximación 🔎 :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Sendero del Molino',
      salida: 'Montehermoso',
      llegada: 'Molinos tradicionales',
      km: 5,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alagon/sendero-molino.jpg',
      maps: 'https://www.google.com/maps/search/Montehermoso+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/molinos-del-rio-alagon-casillas-de-coria-3596408', // ruta de molinos en Casillas de Coria (zona río Alagón) 📍 :contentReference[oaicite:5]{index=5}
    },
    {
      nombre: 'Ruta del Puente Romano',
      salida: 'Coria',
      llegada: 'Puente Romano',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/ruta-puente-romano.jpg',
      maps: 'https://www.google.com/maps/search/Puente+Romano+Coria',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/por-coria-y-su-casco-antiguo-60589659', // ruta por Coria y casco con paso por puente romano 📍 :contentReference[oaicite:6]{index=6}
    },
    {
      nombre: 'Ruta de los Llanos',
      salida: 'Guijo de Galisteo',
      llegada: 'Campos del Alagón',
      km: 11,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-los-llanos.jpg',
      maps: 'https://www.google.com/maps/search/Guijo+de+Galisteo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/montehermoso-guijo-de-galisteo-guijo-de-coria-villa-del-campo-aceituna-montehermoso-27565393', // ruta circular que pasa por Guijo de Galisteo y zonas de campos 📍 :contentReference[oaicite:7]{index=7}
    },
    {
      nombre: 'Sendero del Monte Público',
      salida: 'Moraleja',
      llegada: 'Monte Público',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alagon/sendero-monte-publico.jpg',
      maps: 'https://www.google.com/maps/search/Moraleja+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/montehermoso-guijo-de-galisteo-guijo-de-coria-villa-del-campo-aceituna-montehermoso-27565393', // opción cercana a Moraleja y Montehermoso 📍 :contentReference[oaicite:8]{index=8}
    },
    {
      nombre: 'Ruta del Río Jerte (Tramo Bajo)',
      salida: 'Riolobos',
      llegada: 'Confluencia Jerte-Alagón',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/ruta-rio-jerte.jpg',
      maps: 'https://www.google.com/maps/search/Riolobos+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/molinos-del-rio-alagon-casillas-de-coria-3596408', // ruta representativa por entorno del Alagón (ideal base) 📍 :contentReference[oaicite:9]{index=9}
    },
  ];
}
