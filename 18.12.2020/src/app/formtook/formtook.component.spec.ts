import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtookComponent } from './formtook.component';

describe('FormtookComponent', () => {
  let component: FormtookComponent;
  let fixture: ComponentFixture<FormtookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
