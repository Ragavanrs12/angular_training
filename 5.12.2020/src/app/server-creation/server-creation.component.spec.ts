import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCreationComponent } from './server-creation.component';

describe('ServerCreationComponent', () => {
  let component: ServerCreationComponent;
  let fixture: ComponentFixture<ServerCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
