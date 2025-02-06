import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdhesionService {

  constructor() {}
     // Méthode pour obtenir le nombre d'adhérents (données simulées)
   getAdhesionCount(): Observable<{ count: number }> {
    const simulatedAdhesionCount = 1000;  // Données simulées pour les étudiants
    return of({ count: simulatedAdhesionCount });
   }

}
