import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp.component';

describe('RetrieveapplicationcompComponent', () => {
  let component: RetrieveapplicationcompComponent;
  let fixture: ComponentFixture<RetrieveapplicationcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveapplicationcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveapplicationcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
