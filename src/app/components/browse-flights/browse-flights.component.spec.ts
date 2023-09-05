import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFlightsComponent } from './browse-flights.component';

describe('BrowseFlightsComponent', () => {
  let component: BrowseFlightsComponent;
  let fixture: ComponentFixture<BrowseFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
