import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-extremadura-map',
  templateUrl: './extremadura-map.component.html',
  styleUrls: ['./extremadura-map.component.css'],
  imports: [RouterLink],
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
    this.router.navigate(['/elJerte']);
  }
}
