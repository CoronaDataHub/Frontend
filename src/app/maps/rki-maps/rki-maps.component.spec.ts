import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkiMapsComponent } from './rki-maps.component';

describe('RkiMapsComponent', () => {
  let component: RkiMapsComponent;
  let fixture: ComponentFixture<RkiMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkiMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkiMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
