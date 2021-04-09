import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primer1Component } from './primer1.component';

describe('Primer1Component', () => {
  let component: Primer1Component;
  let fixture: ComponentFixture<Primer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
