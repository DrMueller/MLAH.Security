import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSecurityComponent } from './ng-security.component';

describe('NgSecurityComponent', () => {
  let component: NgSecurityComponent;
  let fixture: ComponentFixture<NgSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
