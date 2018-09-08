import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAppNavigationComponent } from './ng-app-navigation.component';

describe('NgAppNavigationComponent', () => {
  let component: NgAppNavigationComponent;
  let fixture: ComponentFixture<NgAppNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAppNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAppNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
