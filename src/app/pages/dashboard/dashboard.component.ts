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
  chartpolar: any;
  chartradar: any;

  constructor(
    private _persona: PersonaService
  ) { }

  ngOnInit() {
    this.cargarPersona();
    this.cargandobars();
    this.cargandopie();
    this.cargandopolar();
    this.cargandoradar();
  }

  cargarPersona() {
    // this._persona.getPersona().subscribe(
    //   result => {
    //     console.log(result);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
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

  cargandopolar() {
      this.chartpolar = new Chart( 'polar' , {
    type: 'polarArea',
      data: {
        labels: ['Proveedor 1', 'Proveedor 2', 'Proveedor 3', 'Proveedor 4', 'Proveedor 5'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
            ],
            data: [500, 400, 300, 250, 150]
          }
        ]
    },
    options: {
      title: {
        display: true,
        text: 'Productos Entregados por Proveedor'
      }
    }
      });
  }

  cargandoradar() {
    this.chartradar = new Chart( 'radar', {
      type: 'radar',
      data: {
        labels: ['Guatemala', 'Honduras', 'Nicaragua', 'Consta Rica', 'Panama'],
        datasets: [
          {
            label: '1950',
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: 'black',
            pointBackgroundColor: 'black',
            data: [8.77, 55.61, 21.69, 6.62, 6.82]
          }, {
            label: '2050',
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'black',
            pointBorderColor: 'black',
            data: [25.48, 54.16, 7.61, 8.06, 4.45]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Zonas de Exportacion de Productos'
        }
      }
  });
  }
}
