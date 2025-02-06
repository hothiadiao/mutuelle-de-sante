import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

  constructor() { }
    // Méthode pour obtenir le nombre d'adhérents (données simulées)
     getBeneficiareCount(): Observable<{ count: number }> {
      const simulatedBeneficiaireCount = 900;  // Données simulées pour les étudiants
      return of({ count: simulatedBeneficiaireCount });
     }
  
}
