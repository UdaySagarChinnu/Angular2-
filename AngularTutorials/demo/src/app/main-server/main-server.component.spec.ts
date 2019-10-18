import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainServerComponent } from './main-server.component';

describe('MainServerComponent', () => {
  let component: MainServerComponent;
  let fixture: ComponentFixture<MainServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
