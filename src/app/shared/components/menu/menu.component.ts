import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    {
      routeName: '/choose-language',
      titleName: 'Menu.Lingua',
      icon: 'language',
    },
    {
      routeName: '/home',
      titleName: 'Menu.Casa',
      icon: 'home',
    },
    {
      routeName: '/projects',
      titleName: 'Menu.Projetos',
      icon: 'assignment',
    },
    {
      routeName: '/contact',
      titleName: 'Menu.Contato',
      icon: 'account_box',
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use(environment.language || 'pt');
  }
}
