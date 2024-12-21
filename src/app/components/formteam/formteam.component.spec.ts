import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormteamComponent } from './formteam.component';

describe('FormteamComponent', () => {
  let component: FormteamComponent;
  let fixture: ComponentFixture<FormteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormteamComponent]
    });
    fixture = TestBed.createComponent(FormteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
