import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlRkiMarkerComponent } from './html-rki-marker.component';

describe('HtmlRkiMarkerComponent', () => {
  let component: HtmlRkiMarkerComponent;
  let fixture: ComponentFixture<HtmlRkiMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlRkiMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlRkiMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
