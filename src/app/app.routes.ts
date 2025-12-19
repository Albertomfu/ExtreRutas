import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LasHurdesComponent } from './pages/zone/las-hurdes/las-hurdes.component';
import { TrujilloComponent } from './pages/zone/trujillo/trujillo.component';
import { LaVeraComponent } from './pages/zone/la-vera/la-vera.component';
import { AlagonComponent } from './pages/zone/alagon/alagon.component';
import { ElJerteComponent } from './pages/zone/el-jerte/el-jerte.component';
import { ZonasComponent } from './pages/zonas/zonas.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'rutas', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'zonas', component: ZonasComponent },
  { path: 'lasHurdes', component: LasHurdesComponent },
  { path: 'trujillo', component: TrujilloComponent },
  { path: 'laVera', component: LaVeraComponent },
  { path: 'alagon', component: AlagonComponent },
  { path: 'elJerte', component: ElJerteComponent },
];
