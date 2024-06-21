import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilRespComponent } from './edit-profil-resp.component';

describe('EditProfilRespComponent', () => {
  let component: EditProfilRespComponent;
  let fixture: ComponentFixture<EditProfilRespComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfilRespComponent]
    });
    fixture = TestBed.createComponent(EditProfilRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
