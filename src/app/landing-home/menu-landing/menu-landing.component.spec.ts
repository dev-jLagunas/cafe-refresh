import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLandingComponent } from './menu-landing.component';

describe('MenuLandingComponent', () => {
  let component: MenuLandingComponent;
  let fixture: ComponentFixture<MenuLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
