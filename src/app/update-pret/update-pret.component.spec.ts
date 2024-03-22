import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePretComponent } from './update-pret.component';

describe('UpdatePretComponent', () => {
  let component: UpdatePretComponent;
  let fixture: ComponentFixture<UpdatePretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePretComponent]
    });
    fixture = TestBed.createComponent(UpdatePretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
