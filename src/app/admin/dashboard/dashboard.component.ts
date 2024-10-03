import { Component, computed, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  menuItems = signal<MenuItem[]>([]);

  constructor(private translate: TranslateService) {
    this.loadMenuItems();

    this.translate.onLangChange.subscribe(() => {
      this.loadMenuItems();
    });
  }

  loadMenuItems() {
    this.menuItems.set([
      {
        icon: 'admin_panel_settings',
        label: this.translate.instant('Profiles'),
        route: 'profiles'
      },
      {
        icon: 'group',
        label: this.translate.instant('Users'),
        route: 'users'
      },
      {
        icon: 'content_paste',
        label: this.translate.instant('Audit'),
        route: 'audit'
      }
    ]);
  }
  collapsed = signal(true);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  expandSidenav() {
    this.collapsed.set(false);
  }

  collapseSidenav() {
    this.collapsed.set(true);
  }
}
