import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedecisionComponent } from './employeedecision.component';

describe('EmployeedecisionComponent', () => {
  let component: EmployeedecisionComponent;
  let fixture: ComponentFixture<EmployeedecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
