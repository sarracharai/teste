import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepartementsComponent } from './liste-departements.component';

describe('ListeDepartementsComponent', () => {
  let component: ListeDepartementsComponent;
  let fixture: ComponentFixture<ListeDepartementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDepartementsComponent]
    });
    fixture = TestBed.createComponent(ListeDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
