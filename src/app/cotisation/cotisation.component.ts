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
