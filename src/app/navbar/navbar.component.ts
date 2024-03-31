import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  onToggleDarkMode(): void {
    this.toggleDarkMode.emit();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
