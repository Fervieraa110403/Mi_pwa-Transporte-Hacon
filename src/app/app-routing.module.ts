import { Routes } from '@angular/router';
import { RutasComponent } from './components/rutas/rutas.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: RutasComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent }
];




