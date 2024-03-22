import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepretComponent } from './listepret.component';

describe('ListepretComponent', () => {
  let component: ListepretComponent;
  let fixture: ComponentFixture<ListepretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListepretComponent]
    });
    fixture = TestBed.createComponent(ListepretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
