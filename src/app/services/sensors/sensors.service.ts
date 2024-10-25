import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Http } from '@capacitor-community/http';

import { HttpService } from '../httclient/http.service';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private url =  'http://35.172.116.139/api/sensor/getData';
  
  constructor(
    private httpClient: HttpService
  ) {}

  getDataSensors(): Observable<HttpResponse<any>> {
    const options = {
      url: this.url,
      headers: { 'Content-Type': 'application/json' }
    };

    // Convertimos la promesa del plugin a un Observable
    return from(
      Http.get(options).then(response => {
        // Simulamos el formato de HttpResponse
        console.log(response);
        console.log('el response')
        return {
          body: response.data,
          status: response.status
        } as HttpResponse<any>;
      }).catch(error => {
        throw error;
      })
    );
  }


  async get_sensor_test() {
    return new Promise(async (resolve, reject) => {
      const url = '/sensor/getData';
      (await this.httpClient.get(url, true)).subscribe(
        async (response: any) => {
          console.log('response', response.data);
          if (response && response.status == 200) {
            resolve(response.data); // Devolvemos el resultado
          } else {
            reject('Respuesta inválida de la API');
          }
        },
        (error: any) => {
          reject('Error en la solicitud: ' + error.message);
        }
      );
    });
  }
}