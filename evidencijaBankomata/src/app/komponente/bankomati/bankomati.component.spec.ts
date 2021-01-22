import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankomatiComponent } from './bankomati.component';

describe('BankomatiComponent', () => {
  let component: BankomatiComponent;
  let fixture: ComponentFixture<BankomatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankomatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankomatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
