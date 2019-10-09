import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscompComponent } from './statuscomp.component';

describe('StatuscompComponent', () => {
  let component: StatuscompComponent;
  let fixture: ComponentFixture<StatuscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
