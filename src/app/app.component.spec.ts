import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;
  let renderer: Renderer2;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: TranslateService,
          useValue: jasmine.createSpyObj('TranslateService', [
            'use',
            'getBrowserLang',
            'setDefaultLang',
            'addLangs',
          ]),
        },
        {
          provide: Renderer2,
          useValue: jasmine.createSpyObj('Renderer2', [
            'addClass',
            'removeClass',
          ]),
        },
        { provide: DOCUMENT, useValue: document },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    renderer = TestBed.inject(Renderer2);
    document = TestBed.inject(DOCUMENT);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default language and use browser language if available', () => {
    translateService.getBrowserLang.and.returnValue('es');
    component = new AppComponent(translateService, renderer, document);
    fixture.detectChanges();
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
    expect(translateService.use).toHaveBeenCalledWith('es');
  });

  it('should toggle dark mode class on the body element', () => {
    const body = document.body;

    // Simulate dark mode is on
    spyOn(body.classList, 'contains').and.returnValue(true);
    component.toggleDarkMode();
    expect(renderer.removeClass).toHaveBeenCalledWith(body, 'dark');

    // Simulate dark mode is off
    spyOn(body.classList, 'contains').and.returnValue(false);
    component.toggleDarkMode();
    expect(renderer.addClass).toHaveBeenCalledWith(body, 'dark');
  });

  it('should call scrollToTop and scroll the window to top', () => {
    spyOn(window, 'scrollTo');
    component.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should change the language when changeLanguage is called', () => {
    component.changeLanguage('jp');
    expect(translateService.use).toHaveBeenCalledWith('jp');
  });
});
