import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAbsencesComponent } from './liste-absences.component';

describe('ListeAbsencesComponent', () => {
  let component: ListeAbsencesComponent;
  let fixture: ComponentFixture<ListeAbsencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAbsencesComponent]
    });
    fixture = TestBed.createComponent(ListeAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
