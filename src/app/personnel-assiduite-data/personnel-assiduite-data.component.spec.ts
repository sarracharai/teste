import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAssiduiteDataComponent } from './personnel-assiduite-data.component';

describe('PersonnelAssiduiteDataComponent', () => {
  let component: PersonnelAssiduiteDataComponent;
  let fixture: ComponentFixture<PersonnelAssiduiteDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelAssiduiteDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelAssiduiteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
