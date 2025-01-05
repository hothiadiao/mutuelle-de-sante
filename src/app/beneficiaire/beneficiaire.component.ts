import { Component, OnInit } from '@angular/core';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent implements OnInit {
  adherents = [];

  constructor(private gestionService: GestionService) {}

  ngOnInit() {
    this.adherents = this.gestionService.getAdherents();
  }
}
