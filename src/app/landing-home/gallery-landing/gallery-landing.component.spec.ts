import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLandingComponent } from './gallery-landing.component';

describe('GalleryLandingComponent', () => {
  let component: GalleryLandingComponent;
  let fixture: ComponentFixture<GalleryLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
