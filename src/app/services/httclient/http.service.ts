import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  ) { }

  private async getHeaders(withToken: boolean) {
    let headers: any = {
      'Content-Type': 'application/json'
    };
    return headers;
  }

  async post(method: string, data: any, withToken = false) {
    const url = environment.apiUrl + method;
    const headers = await this.getHeaders(withToken);
    
    const options: HttpOptions = {
      url,
      method: 'POST',
      headers,
      data
    };
    return from(CapacitorHttp.request(options));
  }

  async get(method: string, withToken = false) {
    const url = environment.apiUrl + method;
    const headers = await this.getHeaders(withToken);
    
    const options: HttpOptions = {
      url,
      method: 'GET',
      headers
    };
    return from(CapacitorHttp.request(options));
  }

  async put(method: string, data: any, withToken = false) {
    const url = environment.apiUrl + method;
    const headers = await this.getHeaders(withToken);
    
    const options: HttpOptions = {
      url,
      method: 'PUT',
      headers,
      data
    };
    return from(CapacitorHttp.request(options));
  }

  async delete(method: string, withToken = false) {
    const url = environment.apiUrl + method;
    const headers = await this.getHeaders(withToken);
    
    const options: HttpOptions = {
      url,
      method: 'DELETE',
      headers
    };
    return from(CapacitorHttp.request(options));
  }
}