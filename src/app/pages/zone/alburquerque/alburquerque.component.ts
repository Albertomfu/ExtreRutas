import { Component } from '@angular/core';

@Component({
  selector: 'app-alburquerque',
  imports: [],
  templateUrl: './alburquerque.component.html',
  styleUrl: './alburquerque.component.css',
})
export class AlburquerqueComponent {
  rutas = [
    {
      nombre: 'Ruta del Castillo de Luna y Ermita',
      salida: 'Alburquerque',
      llegada: 'Castillo de Luna',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/79651101Master.jpg',
      maps: 'https://www.google.com/maps/search/Castillo-de-Luna-Alburquerque',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436', // ruta circular cerca de Alburquerque que incluye entorno del Castillo :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Sendero de la Sierra Fronteriza',
      salida: 'Alburquerque',
      llegada: 'Límite fronterizo con Portugal',
      km: 11,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Lineal',
      imagen: 'images/alburquerque/sierra-fronteriza.jpg',
      maps: 'https://www.google.com/maps/search/Sierra+de+San+Pedro+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-sierra-del-centinela-46008643', // ruta por Sierra del Centinela/Santa Lucía (frontera natural) :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Ruta de las Dehesas y Cortijos',
      salida: 'Alburquerque',
      llegada: 'Antiguos cortijos ganaderos',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/dehesas-cortijos.jpg',
      maps: 'https://www.google.com/maps/search/Dehesa+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-cementerio-canada-boyal-96500', // ruta «Cañada Boyal» pasa por dehesas alrededor del pueblo :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Camino Histórico a Portugal',
      salida: 'Alburquerque',
      llegada: 'Antiguo paso fronterizo',
      km: 8,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Lineal',
      imagen: 'images/alburquerque/camino-frontera-portugal.jpg',
      maps: 'https://www.google.com/maps/search/Alburquerque+Portugal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-sierra-del-centinela-46008643', // mismo track de sierra/frontera recomendable para este fin :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Ruta del Río Gévora y Molinos',
      salida: 'Alburquerque',
      llegada: 'Antiguos molinos harineros',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/rio-gevora-molinos.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Gevora',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436', // versión del paseo + bosque que puede cubrir zona de molinos y ribera :contentReference[oaicite:5]{index=5}
    },
    {
      nombre: 'Ruta de los Miradores de la Sierra',
      salida: 'Alburquerque',
      llegada: 'Miradores naturales',
      km: 5,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/miradores-sierra.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-sierra-del-centinela-46008643', // sierra con puntos elevados y vistas panorámicas :contentReference[oaicite:6]{index=6}
    },
    {
      nombre: 'Sendero de los Fortines Fronterizos',
      salida: 'Alburquerque',
      llegada: 'Antiguas construcciones defensivas',
      km: 10,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/fortines-fronterizos.jpg',
      maps: 'https://www.google.com/maps/search/Fortines+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas/senderismo/espana/extremadura/alburquerque', // listado de rutas variadas en zona fronteriza :contentReference[oaicite:7]{index=7}
    },
    {
      nombre: 'Ruta de las Encinas Centenarias',
      salida: 'Alburquerque',
      llegada: 'Encinares históricos',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/encinas-centenarias.jpg',
      maps: 'https://www.google.com/maps/search/Encinas+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas/senderismo/espana/extremadura/alburquerque', // varias rutas pasan por encinares típicos de la zona :contentReference[oaicite:8]{index=8}
    },
    {
      nombre: 'Sendero del Arroyo de la Lapa',
      salida: 'Alburquerque',
      llegada: 'Zona de arroyos y charcas',
      km: 5,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/arroyo-lapa.jpg',
      maps: 'https://www.google.com/maps/search/Arroyo+de+la+Lapa+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas/senderismo/espana/extremadura/alburquerque', // rutas con tramos de arroyos y dehesa disponibles :contentReference[oaicite:9]{index=9}
    },
    {
      nombre: 'Ruta Nocturna del Castillo y Murallas',
      salida: 'Casco histórico de Alburquerque',
      llegada: 'Murallas iluminadas',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/ruta-nocturna.jpg',
      maps: 'https://www.google.com/maps/search/Casco+historico+Alburquerque',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436', // ruta corta del entorno histórico ideal para pasear (día/noche) :contentReference[oaicite:10]{index=10}
    },
  ];
}
