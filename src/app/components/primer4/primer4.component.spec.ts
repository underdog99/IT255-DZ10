import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primer4Component } from './primer4.component';

describe('Primer4Component', () => {
  let component: Primer4Component;
  let fixture: ComponentFixture<Primer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primer4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
