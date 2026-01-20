import { Component } from '@angular/core';

@Component({
  selector: 'app-las-villuercas',
  imports: [],
  templateUrl: './las-villuercas.component.html',
  styleUrl: './las-villuercas.component.css',
})
export class LasVilluercasComponent {
  rutas = [
    {
      nombre: 'GR‑116 Camino Natural de Las Villuercas',
      salida: 'Puerto Rey',
      llegada: 'Logrosán',
      km: 76,
      dificultad: 'Alta',
      duracion: 'Variada',
      tipo: 'Solo ida',
      imagen: 'images/villuercas/gr116.jpg',
      maps: 'https://www.google.com/maps?q=Puerto+Rey+Extremadura',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/camino-natural-de-las-villuercas-6039629', // ruta clásica de largo recorrido en Villuercas :contentReference[oaicite:0]{index=0}
    },
    {
      nombre: 'Pico Villuercas (circular)',
      salida: 'Navezuelas',
      llegada: 'Pico Villuercas',
      km: 9.8,
      dificultad: 'Media',
      duracion: '3‑4 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/pico-villuercas.jpg',
      maps: 'https://www.google.com/maps/search/Pico+Villuercas+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/pico-villuercas-5737194', // subida y vuelta al Pico Villuercas :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Geoparque Las Villuercas',
      salida: 'Cabañas del Castillo',
      llegada: 'Geoparque Villuercas',
      km: 13,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Lineal',
      imagen: 'images/villuercas/geoparque-villuercas.jpg',
      maps: 'https://www.google.com/maps/search/Cabañas+del+Castillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/geoparque-las-villuercas-12490523', // ruta senderismo representativa por Villuercas :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Navezuelas – Pico Villuercas (sendero avanzado)',
      salida: 'Navezuelas',
      llegada: 'Pico Villuercas',
      km: 15.7,
      dificultad: 'Alta',
      duracion: '6‑7 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/navezuelas-pico.jpg',
      maps: 'https://www.google.com/maps/search/Navezuelas+Caceres',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/navezuelas-las-villuercas-circular-pico-villuercas-subida-por-el-almonte-y-regreso-por-viejas-37660133', // ruta extensa por Pico Villuercas :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Ruta del Geoparque Villuercas‑Ibores‑Jara',
      salida: 'Cañamero',
      llegada: 'Roturas / La Solana',
      km: 50,
      dificultad: 'Media',
      duracion: '4‑6 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/geoparque-grande.jpg',
      maps: 'https://www.google.com/maps/search/Geoparque+Villuercas+Ibores+Jara',
      wikiloc:
        'https://es.wikiloc.com/rutas-ciclismo/ruta-por-el-geoparque-villuercas-ibores-jara-41705203', // recorrido amplio por el geoparque :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Molinos del Guadalupejo y Embalse',
      salida: 'Guadalupe',
      llegada: 'Molinos y Embalse',
      km: 12.8,
      dificultad: 'Media',
      duracion: '3‑4 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/molinos-guadalupejo.jpg',
      maps: 'https://www.google.com/maps/search/Guadalupe+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/villuercas-ibores-jara-guadalupe-ruta-molinos-del-guadalupejo-y-embalse-206754408', // interesante ruta circular cerca de Guadalupe :contentReference[oaicite:5]{index=5}
    },
  ];
}
