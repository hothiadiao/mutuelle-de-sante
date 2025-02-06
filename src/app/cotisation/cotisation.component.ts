/*
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements OnInit {
  adherents = [];

  constructor(private gestionService: GestionService) {}

  ngOnInit() {
    this.adherents = this.gestionService.getAdherents();
  }
}
*/
 import { CommonModule } from '@angular/common';
 import { Component, OnInit } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { RouterModule } from '@angular/router';
 import { NavbarComponent } from '../shared/navbar/navbar.component';
 
 declare var window: any;  // Déclare l'objet window pour utiliser Bootstrap Modal
 
 @Component({
   selector: 'app-cotisation',
   standalone: true,
   imports: [CommonModule, RouterModule, FormsModule,NavbarComponent], // Assurez-vous que FormsModule est bien importé
   templateUrl: './cotisation.component.html',
   styleUrls: ['./cotisation.component.css']
 })
 export class CotisationComponent implements OnInit {
   selectedCotisation: any = { matricule: '', nom: '', prenom: '' }; 
   // Liste des cotisations
   cotisationList = [
     { id: 1, matricule: 'ET101', nom: 'Adeline ', prenom: 'Ndiaye', type: 'Programmation JAVA', montantAdhesion: 50000 },
     { id: 2, matricule: 'ET102', nom: 'Faye ', prenom: 'Jane', type: 'Cybersecurité', montantAdhesion: 60000 },
   ];
 
   constructor() { }
 
   ngOnInit(): void {}
 
   // Méthode pour créer un nouvel étudiant
   createCotisation(cotisation: any): void {
     const newCotisation = { ...cotisation, id: this.cotisationList.length + 1 }; // Assignation d'un nouvel ID
     this.cotisationList.push(newCotisation);
     this.resetSelectedAdhesion(); // Réinitialisation après création
   }
 
   // Méthode pour éditer un étudiant existant
   editCotisation(cotisation: any): void {
     this.selectedCotisation = { ...cotisation }; // Crée une copie de l'objet étudiant pour modification
   }
 
   // Méthode pour mettre à jour un étudiant existant
   updateCotisation(): void {
     if (this.selectedCotisation) {
       const index = this.cotisationList.findIndex(e => e.id === this.selectedCotisation.id);
       if (index !== -1) {
         this.cotisationList[index] = { ...this.selectedCotisation }; // Mise à jour de l'étudiant
       }
       this.resetSelectedAdhesion(); // Réinitialisation après mise à jour
     }
   }
 
   // Méthode pour supprimer un étudiant
   deleteAdhesion(id: number): void {
     this.cotisationList = this.cotisationList.filter(cotisation => cotisation.id !== id);
   }
 
   // Réinitialise la sélection d'étudiant pour l'ajout ou l'édition
   resetSelectedAdhesion(): void {
     this.selectedCotisation = { matricule: '', nom: '', prenom: '', type: '', montantCotisation: null };
   }
 
   // Méthode pour ouvrir la modale
   openModal(): void {
     const modal = new window.bootstrap.Modal(document.getElementById('cotisationModal'));
     modal.show();
   }
 
   // Méthode pour fermer la modale
   closeModal(): void {
     const modal = new window.bootstrap.Modal(document.getElementById('cotisationModal'));
     modal.hide();
   }
 }
 
 
