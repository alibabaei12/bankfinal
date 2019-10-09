import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycreditcompComponent } from './applycreditcomp.component';

describe('ApplycreditcompComponent', () => {
  let component: ApplycreditcompComponent;
  let fixture: ComponentFixture<ApplycreditcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycreditcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycreditcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
