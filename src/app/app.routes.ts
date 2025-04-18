import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RutasComponent } from './components/rutas/rutas.component';

export const routes: Routes = [
  { path: '', component: RutasComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent }
];
