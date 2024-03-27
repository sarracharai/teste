import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssiduitesComponent } from './assiduites.component';

describe('AssiduitesComponent', () => {
  let component: AssiduitesComponent;
  let fixture: ComponentFixture<AssiduitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssiduitesComponent]
    });
    fixture = TestBed.createComponent(AssiduitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
