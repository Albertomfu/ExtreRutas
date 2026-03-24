import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'], // plural
})
export class LayoutHeaderComponent {
  usuario: any = null;

  ngOnInit() {
    const user = localStorage.getItem('usuario');

    if (user) {
      this.usuario = JSON.parse(user);
    }
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');

    location.reload();
  }
}
