/*
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent implements OnInit {
  adhesion = [];

  constructor(private gestionService: GestionService) {}

  ngOnInit() {
    this.adhesion = this.gestionService.getAdherents();
  }
}
  */
 /*import { Component, OnInit } from '@angular/core';
 import { GestionService } from '../services/gestion.service';
 
 @Component({
   selector: 'app-adhesion',
   templateUrl: './adhesion.component.html',
   styleUrls: ['./adhesion.component.css']
 })
 export class AdhesionComponent implements OnInit {
   adherents = [];
   nouvelAdherent = { nom: '', cotisation: 0 };
 
   constructor(private gestionService: GestionService) {}
 
   ngOnInit() {
     this.adherents = this.gestionService.getAdherents();
   }
 
   ajouterAdherent() {
     if (this.nouvelAdherent.nom && this.nouvelAdherent.cotisation) {
       this.gestionService.addAdherent(this.nouvelAdherent);
       this.nouvelAdherent = { nom: '', cotisation: 0 };
     }
   }
 }
 */
 /*
 import { Component, OnInit } from '@angular/core';
 import { GestionService } from '../services/gestion.service';
 
 @Component({
   selector: 'app-adhesion',
   templateUrl: './adhesion.component.html',
   styleUrls: ['./adhesion.component.css']
 })
 export class AdhesionComponent implements OnInit {
 
   /*
   adherents: { id: number; nom: string; cotisation: number; beneficiaires: string[] }[] = [];
 
   constructor(private gestionService: GestionService) {}
 
   ngOnInit(): void {
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
   selector: 'app-beneficiaire',
   standalone: true,
   imports: [CommonModule, RouterModule, FormsModule,NavbarComponent], // Assurez-vous que FormsModule est bien importé
   templateUrl: './beneficiaire.component.html',
   styleUrls: ['./beneficiaire.component.css']
 })
 export class BeneficiaireComponent implements OnInit {
   selectedAdhesion: any = { matricule: '', nom: '', prenom: '' }; 
   // Liste des étudiants
   adhesionList = [
     { id: 1, matricule: 'ET101', nom: 'Adeline ', prenom: 'Ndiaye', type: 'Programmation JAVA', montantAdhesion: 50000 },
     { id: 2, matricule: 'ET102', nom: 'Faye ', prenom: 'Jane', type: 'Cybersecurité', montantAdhesion: 60000 },
   ];
 
   constructor() { }
 
   ngOnInit(): void {}
 
   // Méthode pour créer un nouvel étudiant
   createAdhesion(adhesion: any): void {
     const newAdhesion = { ...adhesion, id: this.adhesionList.length + 1 }; // Assignation d'un nouvel ID
     this.adhesionList.push(newAdhesion);
     this.resetSelectedAdhesion(); // Réinitialisation après création
   }
 
   // Méthode pour éditer un étudiant existant
   editAdhesion(adhesion: any): void {
     this.selectedAdhesion = { ...adhesion }; // Crée une copie de l'objet étudiant pour modification
   }
 
   // Méthode pour mettre à jour un étudiant existant
   updateAdhesion(): void {
     if (this.selectedAdhesion) {
       const index = this.adhesionList.findIndex(e => e.id === this.selectedAdhesion.id);
       if (index !== -1) {
         this.adhesionList[index] = { ...this.selectedAdhesion }; // Mise à jour de l'étudiant
       }
       this.resetSelectedAdhesion(); // Réinitialisation après mise à jour
     }
   }
 
   // Méthode pour supprimer un étudiant
   deleteAdhesion(id: number): void {
     this.adhesionList = this.adhesionList.filter(adhesion => adhesion.id !== id);
   }
 
   // Réinitialise la sélection d'étudiant pour l'ajout ou l'édition
   resetSelectedAdhesion(): void {
     this.selectedAdhesion = { matricule: '', nom: '', prenom: '', type: '', montantAdhesion: null };
   }
 
   // Méthode pour ouvrir la modale
   openModal(): void {
     const modal = new window.bootstrap.Modal(document.getElementById('adhesionModal'));
     modal.show();
   }
 
   // Méthode pour fermer la modale
   closeModal(): void {
     const modal = new window.bootstrap.Modal(document.getElementById('adhesionModal'));
     modal.hide();
   }
 }
 
 
