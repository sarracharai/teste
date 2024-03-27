import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssiduiteComponent } from './add-assiduite.component';

describe('AddAssiduiteComponent', () => {
  let component: AddAssiduiteComponent;
  let fixture: ComponentFixture<AddAssiduiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAssiduiteComponent]
    });
    fixture = TestBed.createComponent(AddAssiduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
