import { Component } from '@angular/core';

@Component({
  selector: 'app-los-ibores',
  imports: [],
  templateUrl: './los-ibores.component.html',
  styleUrl: './los-ibores.component.css',
})
export class LosIboresComponent {
  rutas = [
    {
      nombre: 'Ruta Ibores',
      salida: 'Castañar de Ibor',
      llegada: 'Mesas / Castañar',
      km: 11.5,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Lineal',
      imagen: 'images/ibores/ruta-ibores.jpg',
      maps: 'https://www.google.com/maps/search/Castañar+de+Ibor+Caceres',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/ibores-118533291', // ruta senderismo destacada cerca del Ibores :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Ruta por Bohonal de Ibor',
      salida: 'Bohonal de Ibor',
      llegada: 'Valle / Fresnedoso',
      km: 41.5,
      dificultad: 'Moderada',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ibores/ruta-bohonal.jpg',
      maps: 'https://www.google.com/maps/search/Bohonal+de+Ibor+Caceres',
      wikiloc:
        'https://gl.wikiloc.com/rutas-bicicleta-de-montana/ruta-por-los-ibores-181077730', // ruta ciclista/btt por la zona de Ibores :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Ruta Navalvillar de Ibor – Sierra Viejas',
      salida: 'Navalvillar de Ibor',
      llegada: 'Sierra Viejas',
      km: 14,
      dificultad: 'Difícil',
      duracion: '6–7 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ibores/navalvillar-sierra-viejas.jpg',
      maps: 'https://www.google.com/maps/search/Navalvillar+de+Ibor+Caceres',
      wikiloc:
        'https://gl.wikiloc.com/rutas-alpinismo/sierra-hospital-del-obispo-villuercas-e-ibores-218427', // trayecto de montaña exigente :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Travesía Valle del Río Viejas – Guadalupe',
      salida: 'Navalvillar de Ibor',
      llegada: 'Guadalupe (travesía)',
      km: 24,
      dificultad: 'Media',
      duracion: '8 h',
      tipo: 'Lineal',
      imagen: 'images/ibores/valle-viejas-guadalupe.jpg',
      maps: 'https://www.google.com/maps/search/Navalvillar+de+Ibor+Guadalupe',
      wikiloc:
        'https://uk.wikiloc.com/marshruty-nordic-walking/navalvillar-de-ibor-valle-del-rio-viejas-guadalupe-151086224', // ruta de travesía popular :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Ruta Geoparque Villuercas‑Ibores‑Jara',
      salida: 'Cañamero',
      llegada: 'Berzocana / Trav. Comarca',
      km: 65,
      dificultad: 'Moderada',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/ibores/geoparque-villuercas-ibores.jpg',
      maps: 'https://www.google.com/maps/search/Geoparque+Villuercas+Ibores+Jara',
      wikiloc:
        'https://gl.wikiloc.com/rutas-ciclismo/ruta-por-el-geoparque-villuercas-ibores-jara-41705203', // recorrido amplio por el geoparque :contentReference[oaicite:5]{index=5}
    },
  ];
}
