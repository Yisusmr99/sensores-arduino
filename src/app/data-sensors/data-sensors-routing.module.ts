import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSensorsPage } from './data-sensors.page';

const routes: Routes = [
  {
    path: '',
    component: DataSensorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSensorsPageRoutingModule {}
