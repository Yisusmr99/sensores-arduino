import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private url =  'http://35.172.116.139/api/sensor/getData';
  
  constructor() {}

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
}