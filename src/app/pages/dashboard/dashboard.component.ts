import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  chartbar: any;
  chartpie: any;

  constructor(
    private _persona: PersonaService
  ) { }

  ngOnInit() {
    this.cargarPersona();
    this.cargandobars();
    this.cargandopie();
  }

  cargarPersona() {
    this._persona.getPersona().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  cargandobars() {
    this.chartbar = new Chart('canvas', {
      type: 'bar',
      data: {
          labels: ['Produccion', 'Ventas', 'Despacho', 'Clientes Satisfechos', 'Reclamos', 'Inventario'],
          datasets: [{
              label: 'Empresa de Hilos',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  cargandopie() {
    this.chartpie = new Chart( 'pie', {
      type: 'doughnut',
    data: {
      labels: ['Sin Entrega', 'Entregados', 'En Camino'],
      datasets: [{
          data: [5, 20, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)']
        }]},
      options: {
        title: {
          display: true,
          text: 'Venta de Productos'
        }
      }
    });
  }
}
