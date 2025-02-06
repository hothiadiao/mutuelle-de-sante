import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AdhesionService } from '../services/adhesion.service';
import { BeneficiaireService }  from '../services/beneficiaire.service';
Chart.register(...registerables);



import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective, RouterModule, CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  adhesionCount: number = 0;
  beneficiaireCount: number = 0;


   // Type du graphique
   public chartType: ChartType = 'bar';

   constructor(
     private adhesionService: AdhesionService,
     private beneficiaireService: BeneficiaireService,
     private router: Router,
     private authService: AuthService, 

   ) {}

  // Déclaration des données pour le graphique
  public chartData: ChartData<'bar'> = {
    labels: ['Adhesion','Beneficiaire'],
    datasets: [
      {
        data: [this.adhesionCount,this.beneficiaireCount],
        label: 'Statistiques',
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        borderColor: ['#007bff', '#28a745', '#ffc107'],
        borderWidth: 1
      }
    ]
  };

  // Options pour le graphique
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

 

  ngOnInit(): void {
    this.loadCounts();
  }

  // Charger les données des étudiants, enseignants et cours
  loadCounts(): void {
    this.adhesionService.getAdhesionCount().subscribe((data) => {
      this.adhesionCount = data.count;
      this.updateChart(); // Mettre à jour le graphique après avoir récupéré les données
    }); 

    this.beneficiaireService.getBeneficiareCount().subscribe((data) => {
      this.beneficiaireCount = data.count;
      this.updateChart(); // Mettre à jour le graphique après avoir récupéré les données
    });

  }
  // Mettre à jour les données du graphique
  updateChart(): void {
    this.chartData.datasets[0].data = [this.adhesionCount];
  }

}
