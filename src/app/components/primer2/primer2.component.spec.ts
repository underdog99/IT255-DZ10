import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primer2Component } from './primer2.component';

describe('Primer2Component', () => {
  let component: Primer2Component;
  let fixture: ComponentFixture<Primer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
