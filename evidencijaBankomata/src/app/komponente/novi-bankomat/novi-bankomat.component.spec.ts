import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviBankomatComponent } from './novi-bankomat.component';

describe('NoviBankomatComponent', () => {
  let component: NoviBankomatComponent;
  let fixture: ComponentFixture<NoviBankomatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviBankomatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviBankomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
