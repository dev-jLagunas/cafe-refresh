import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'es', 'jp']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|es|jp/) ? browserLang : 'en');
  }

  toggleDarkMode() {
    const body = this.document.body;
    const hasDarkClass = body.classList.contains('dark');

    if (hasDarkClass) {
      this.renderer.removeClass(body, 'dark');
    } else {
      this.renderer.addClass(body, 'dark');
    }
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
