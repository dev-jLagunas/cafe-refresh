import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  constructor() {}

  onToggleDarkMode(): void {
    this.toggleDarkMode.emit();
  }

  onChangeLanguage(language: string) {
    this.languageChange.emit(language);
  }
}
