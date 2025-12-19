import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extremadura-map',
  templateUrl: './extremadura-map.component.html',
  styleUrls: ['./extremadura-map.component.css'],
  imports: [],
})
export class ExtremaduraMapComponent {
  constructor(private router: Router) {}

  irALasHurdes() {
    this.router.navigate(['/lasHurdes']);
  }
  irATrujillo() {
    this.router.navigate(['/trujillo']);
  }
  irALaVera() {
    this.router.navigate(['/laVera']);
  }
  irAAlagon() {
    this.router.navigate(['/alagon']);
  }
  irAElJerte() {
    this.router.navigate(['/eljerte']);
  }
}
