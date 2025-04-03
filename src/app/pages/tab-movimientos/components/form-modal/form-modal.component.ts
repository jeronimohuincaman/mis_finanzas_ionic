import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movimiento } from '../../tab-movimientos.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  standalone: false
})
export class FormModalComponent implements OnInit {
  form: FormGroup;
  selectedDate: string = ''; // Fecha seleccionada

  conceptos = [
    { id: 1, descripcion: 'Mercado' },
    { id: 2, descripcion: 'Transporte' },
    { id: 3, descripcion: 'Retiro de efectivo' }
  ]

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private modalCtrl: ModalController,
  ) {
    this.form = this.fb.group({
      fecha: ['', [Validators.required]],
      concepto: ['', [Validators.required, Validators.minLength(1)]],
      cantidad: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() { }


  save() {
    if (this.form.valid) {
      const movimiento = {
        fecha: this.datePipe.transform(this.form.value.fecha, 'yyyy-MM-dd') || '',
        concepto: this.form.value.concepto.id,
        cantidad: this.form.value.cantidad
      }
      this.form.reset();
      this.close(movimiento);
    } else {
      console.log('Form is invalid');
    }
  }

  close(movimiento: Movimiento | null) {
    console.log(movimiento)
    this.modalCtrl.dismiss(movimiento, 'cancel');
  }

}
