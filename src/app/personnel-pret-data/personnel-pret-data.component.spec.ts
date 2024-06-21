import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelPretDataComponent } from './personnel-pret-data.component';

describe('PersonnelPretDataComponent', () => {
  let component: PersonnelPretDataComponent;
  let fixture: ComponentFixture<PersonnelPretDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelPretDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelPretDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
