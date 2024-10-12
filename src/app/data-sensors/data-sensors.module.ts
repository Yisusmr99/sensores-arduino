import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSensorsPageRoutingModule } from './data-sensors-routing.module';

import { DataSensorsPage } from './data-sensors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSensorsPageRoutingModule
  ],
  declarations: [DataSensorsPage]
})
export class DataSensorsPageModule {}
