import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfilRhComponent } from './new-profil-rh.component';

describe('NewProfilRhComponent', () => {
  let component: NewProfilRhComponent;
  let fixture: ComponentFixture<NewProfilRhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfilRhComponent]
    });
    fixture = TestBed.createComponent(NewProfilRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
