import { Component, OnInit } from '@angular/core';
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
