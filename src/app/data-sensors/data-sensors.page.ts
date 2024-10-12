import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorsService } from '../services/sensors/sensors.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpResponse } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-data-sensors',
  templateUrl: './data-sensors.page.html',
  styleUrls: ['./data-sensors.page.scss'],
})
export class DataSensorsPage implements OnInit, OnDestroy {

  data_sensors: Array<any> = [];
  intervalId: any;

  constructor(
    private serviceSensor: SensorsService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getDataSensors();

    this.intervalId = setInterval(() => {
      console.log('Obteniendo datos de los sensores.');
      this.getDataSensors();
    },60000); // 5 minutos = 300000 ms
  }

  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getDataSensors() {
    this.loadingController.create({
      message: 'Obteniendo datos de los sensores.'
    }).then((loading) => {
      loading.present();
  
      // Llamada al servicio para obtener los datos
      this.serviceSensor.getDataSensors().subscribe({
        next: (response: HttpResponse<any>) => {
          console.log('Datos de los sensores obtenidos correctamente.');
          console.log(response);
  
          // Verificar si la respuesta es válida
          if (response && response.body && response.body.data) {
            this.data_sensors = response.body.data || [];
  
            // Ordenar los datos por fecha de creación
            this.data_sensors = this.data_sensors.sort((a: any, b: any) => {
              return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });
          } else {
            this.showAlert('Error: La respuesta no contiene datos válidos.', 'Error');
          }
        },
        error: (error) => {
          console.error('Error obteniendo los datos de los sensores', error);
          this.showAlert('Ocurrió un error al obtener los datos de los sensores: ' + error.message, 'Error');
        },
        complete: () => {
          loading.dismiss();
        }
      });
    });
  }    

  showAlert(message: string, header: string) {
    this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    }).then((alert) => {
      alert.present();
    });
  }

}
