import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBookingModalComponent } from './cab-booking-modal.component';

describe('CabBookingModalComponent', () => {
  let component: CabBookingModalComponent;
  let fixture: ComponentFixture<CabBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabBookingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
