
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { CotisationComponent } from  './cotisation/cotisation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },  
  { path: '', component: AppComponent, children: [  
    { path: 'dashboard', component: DashboardComponent },
    { path: 'adhesion', component: AdhesionComponent },
    { path: 'beneficiaire', component: BeneficiaireComponent },
    { path: 'cotisation', component: CotisationComponent },
    
  ]},
  { path: '**', redirectTo: '/login' } ,
 
];