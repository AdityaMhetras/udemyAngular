import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWarningComponent } from './app-warning.component';

describe('AppWarningComponent', () => {
  let component: AppWarningComponent;
  let fixture: ComponentFixture<AppWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
