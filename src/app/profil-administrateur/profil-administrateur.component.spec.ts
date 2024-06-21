import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAdministrateurComponent } from './profil-administrateur.component';

describe('ProfilAdministrateurComponent', () => {
  let component: ProfilAdministrateurComponent;
  let fixture: ComponentFixture<ProfilAdministrateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilAdministrateurComponent]
    });
    fixture = TestBed.createComponent(ProfilAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
