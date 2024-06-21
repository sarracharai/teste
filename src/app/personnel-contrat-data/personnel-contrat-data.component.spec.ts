import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelContratDataComponent } from './personnel-contrat-data.component';

describe('PersonnelContratDataComponent', () => {
  let component: PersonnelContratDataComponent;
  let fixture: ComponentFixture<PersonnelContratDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelContratDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelContratDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
