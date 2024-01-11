import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareComponent } from './hair-care.component';

describe('HairCareComponent', () => {
  let component: HairCareComponent;
  let fixture: ComponentFixture<HairCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairCareComponent]
    });
    fixture = TestBed.createComponent(HairCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
