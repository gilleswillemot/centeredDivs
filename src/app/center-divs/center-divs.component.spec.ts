import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDivsComponent } from './center-divs.component';

describe('CenterDivsComponent', () => {
  let component: CenterDivsComponent;
  let fixture: ComponentFixture<CenterDivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterDivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
