import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelCongeDataComponent } from './personnel-conge-data.component';

describe('PersonnelCongeDataComponent', () => {
  let component: PersonnelCongeDataComponent;
  let fixture: ComponentFixture<PersonnelCongeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelCongeDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelCongeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
