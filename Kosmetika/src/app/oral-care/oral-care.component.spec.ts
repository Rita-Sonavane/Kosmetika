import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralCareComponent } from './oral-care.component';

describe('OralCareComponent', () => {
  let component: OralCareComponent;
  let fixture: ComponentFixture<OralCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OralCareComponent]
    });
    fixture = TestBed.createComponent(OralCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
