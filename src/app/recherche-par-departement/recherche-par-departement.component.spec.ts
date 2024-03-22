import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParDepartementComponent } from './recherche-par-departement.component';

describe('RechercheParDepartementComponent', () => {
  let component: RechercheParDepartementComponent;
  let fixture: ComponentFixture<RechercheParDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParDepartementComponent]
    });
    fixture = TestBed.createComponent(RechercheParDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
