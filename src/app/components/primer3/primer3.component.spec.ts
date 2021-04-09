import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primer3Component } from './primer3.component';

describe('Primer3Component', () => {
  let component: Primer3Component;
  let fixture: ComponentFixture<Primer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
