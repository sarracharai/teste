import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfilComponent } from './new-profil.component';

describe('NewProfilComponent', () => {
  let component: NewProfilComponent;
  let fixture: ComponentFixture<NewProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfilComponent]
    });
    fixture = TestBed.createComponent(NewProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
