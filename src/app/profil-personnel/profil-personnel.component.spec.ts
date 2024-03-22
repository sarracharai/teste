import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPersonnelComponent } from './profil-personnel.component';

describe('ProfilPersonnelComponent', () => {
  let component: ProfilPersonnelComponent;
  let fixture: ComponentFixture<ProfilPersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilPersonnelComponent]
    });
    fixture = TestBed.createComponent(ProfilPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
