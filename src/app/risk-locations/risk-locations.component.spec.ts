import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskLocationsComponent } from './risk-locations.component';

describe('RiskLocationsComponent', () => {
  let component: RiskLocationsComponent;
  let fixture: ComponentFixture<RiskLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
