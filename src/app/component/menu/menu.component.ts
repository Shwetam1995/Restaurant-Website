import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menus: any[] = [];
  constructor(private menuservice: MenuService) { }

  ngOnInit() {
    this.loadMenu();
  }
  loadMenu() {
    this.menuservice.getMenu().subscribe(menu => {
      this.menus = menu;
    });
  }
}
