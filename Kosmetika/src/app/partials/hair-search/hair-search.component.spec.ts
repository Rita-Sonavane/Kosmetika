import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairSearchComponent } from './hair-search.component';

describe('HairSearchComponent', () => {
  let component: HairSearchComponent;
  let fixture: ComponentFixture<HairSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairSearchComponent]
    });
    fixture = TestBed.createComponent(HairSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
