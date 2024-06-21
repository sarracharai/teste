import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDocDataComponent } from './personnel-doc-data.component';

describe('PersonnelDocDataComponent', () => {
  let component: PersonnelDocDataComponent;
  let fixture: ComponentFixture<PersonnelDocDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelDocDataComponent]
    });
    fixture = TestBed.createComponent(PersonnelDocDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
