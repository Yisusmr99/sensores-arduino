import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { SensorsService } from '../services/sensors/sensors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  constructor(
    private serviceSensor: SensorsService
  ) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit(): void {
    this.getDataSensors();
  }

  getDataSensors() {
    this.serviceSensor.getDataSensors().subscribe((data: any) => {
      console.log(data);
    });
  }
}
