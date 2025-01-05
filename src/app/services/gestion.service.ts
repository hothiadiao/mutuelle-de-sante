import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  adherents = [
    { id: 1, nom: 'Jean Dupont', cotisation: 100, beneficiaires: ['Alice', 'Paul'] },
    { id: 2, nom: 'Marie Curie', cotisation: 150, beneficiaires: ['Luc'] }
  ];

  getAdherents() {
    return this.adherents;
  }

  addAdherent(adherent: any) {
    this.adherents.push(adherent);
  }

  constructor() {}
}
