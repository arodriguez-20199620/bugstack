import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLanguageDropdownOpen = false;
  activeLanguage: string = '';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // Obtén el lenguaje activo cuando el componente se inicializa
    this.activeLanguage = this.translate.currentLang || this.translate.getDefaultLang();
    console.log("🚀 ~ NavbarComponent ~ ngOnInit ~ activeLanguage:", this.activeLanguage)

    // Escucha los cambios de lenguaje
    this.translate.onLangChange.subscribe((event) => {
      this.activeLanguage = event.lang;
    });
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  closeLanguageDropdown() {
    this.isLanguageDropdownOpen = false;
  }
}
