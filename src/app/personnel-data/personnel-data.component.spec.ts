import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDataComponent } from './personnel-data.component';

describe('PersonnelDataComponent', () => {
  let component: PersonnelDataComponent;
  let fixture: ComponentFixture<PersonnelDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
