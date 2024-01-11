import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareProductDetailComponent } from './hair-care-product-detail.component';

describe('HairCareProductDetailComponent', () => {
  let component: HairCareProductDetailComponent;
  let fixture: ComponentFixture<HairCareProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairCareProductDetailComponent]
    });
    fixture = TestBed.createComponent(HairCareProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
