import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankomatDetaljiComponent } from './bankomat-detalji.component';

describe('BankomatDetaljiComponent', () => {
  let component: BankomatDetaljiComponent;
  let fixture: ComponentFixture<BankomatDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankomatDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankomatDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
