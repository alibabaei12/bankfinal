import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantdecisioncompComponent } from './instantdecisioncomp.component';

describe('InstantdecisioncompComponent', () => {
  let component: InstantdecisioncompComponent;
  let fixture: ComponentFixture<InstantdecisioncompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantdecisioncompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantdecisioncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
