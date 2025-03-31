import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { TitleService } from '../services/titleService/title.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {
  title: string = ''; // Titulo inicial vacío


  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private _titleService: TitleService
  ) { }

  ngOnInit() {
    this._titleService.currentTitle$.subscribe((title: string) => {
      this.title = title; // Actualiza el título desde el servicio
    })
  }

  // Cierra el menú cuando un ítem es seleccionado
  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
    this.menuCtrl.close();
  }
}
