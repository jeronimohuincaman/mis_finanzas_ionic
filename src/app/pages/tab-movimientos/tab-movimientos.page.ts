import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController } from '@ionic/angular';
import { TitleService } from '../../services/titleService/title.service';
import { FormModalComponent } from './components/form-modal/form-modal.component';

export interface Movimiento {
  fecha: string;
  concepto: { id: number, descripcion: string };
  cantidad: number;
}

@Component({
  selector: 'app-tab-movimientos',
  templateUrl: 'tab-movimientos.page.html',
  styleUrls: ['tab-movimientos.page.scss'],
  standalone: false,
})
export class TabMovimientosPage {
  @ViewChild(IonModal) modal!: IonModal;

  movimientos: Movimiento[] = [];
  headers = ['Fecha', 'Concepto', 'Monto', 'Acciones'];

  constructor(
    private _titleService: TitleService,
    private modalCtrl: ModalController
  ) { }

  ionViewWillEnter() {
    // Actualiza el título del tab cada vez que se muestra
    this._titleService.setTitle('Movimientos');
  }

  async openModal() {
    console.log('object')
    const modal = await this.modalCtrl.create({
      component: FormModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log(data);
      this.movimientos = [data, ...this.movimientos];
    }
  }
}
