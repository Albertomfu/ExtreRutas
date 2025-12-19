import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'], // plural
})
export class LayoutHeaderComponent {}
