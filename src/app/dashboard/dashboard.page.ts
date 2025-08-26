import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Chart, ChartConfiguration } from 'chart.js';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule], // ✅ Necesario para ion-header, ion-content, etc.
})
export class DashboardPage implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef;

  obrasActivas = 0;
  obrasCanceladas = 0;
  obrasTerminadas = 0;
obras: any[] = [];
  private barChart: Chart | null = null;

  constructor(private firestore: Firestore) {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  }

  ngAfterViewInit() {
  // Espera a que el canvas exista
  this.loadData();
}

  loadData() {
  const obrasRef = collection(this.firestore, 'obras');
  collectionData(obrasRef, { idField: 'id' }).subscribe((obras: any[]) => {
    console.log('Obras obtenidas:', obras);
  this.obras = obras;
    // Ajustar según tus valores de Firestore
    this.obrasActivas = obras.filter(o => o.estatus === 'En Proceso').length;
    this.obrasCanceladas = obras.filter(o => o.estatus === 'Cancelada').length;
    this.obrasTerminadas = obras.filter(o => o.estatus === 'Terminada').length;

    this.updateChart();
  });
}
updateChart() {
    if (!this.barCanvas) {
      console.error('⚠️ Canvas no encontrado todavía');
      return;
    }

    if (this.barChart) {
      this.barChart.destroy(); // destruir el anterior para evitar duplicados
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Activas', 'Canceladas', 'Terminadas'],
        datasets: [{
          label: 'Cantidad de Obras',
          data: [this.obrasActivas, this.obrasCanceladas, this.obrasTerminadas],
          backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0']
        }]
      },
      options: {
         responsive: true,    // ahora se adapta al contenedor
      maintainAspectRatio: false, 
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Estado de las Obras' }
        }
      }
    });
  }
}
