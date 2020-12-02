import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOutputComponent } from './blog-output.component';

describe('BlogOutputComponent', () => {
  let component: BlogOutputComponent;
  let fixture: ComponentFixture<BlogOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
