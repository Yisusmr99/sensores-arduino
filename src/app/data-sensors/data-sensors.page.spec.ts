import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSensorsPage } from './data-sensors.page';

describe('DataSensorsPage', () => {
  let component: DataSensorsPage;
  let fixture: ComponentFixture<DataSensorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSensorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
