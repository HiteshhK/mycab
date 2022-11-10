import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverContainerComponent } from './driver-container.component';

describe('DriverContainerComponent', () => {
  let component: DriverContainerComponent;
  let fixture: ComponentFixture<DriverContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
