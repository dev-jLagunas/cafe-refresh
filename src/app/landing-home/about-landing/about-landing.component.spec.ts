import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLandingComponent } from './about-landing.component';

describe('AboutLandingComponent', () => {
  let component: AboutLandingComponent;
  let fixture: ComponentFixture<AboutLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
