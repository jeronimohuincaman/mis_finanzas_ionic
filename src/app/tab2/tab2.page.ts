import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';

export interface Movimiento {
  fecha: string;
  concepto: string;
  cantidad: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  @ViewChild(IonModal) modal!: IonModal;

  movimientos: Movimiento[] = [];
  form: FormGroup;
  selectedDate: string = ''; // Fecha seleccionada

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      fecha: ['', [Validators.required]],
      concepto: ['', [Validators.required, Validators.minLength(1)]],
      cantidad: ['', [Validators.required, Validators.minLength(1)]]
    });
  }


  addMovimiento(item: Movimiento) {
    this.movimientos = [item, ...this.movimientos];
  }

  deleteMovimiento(index: number) {
    this.movimientos.splice(index, 1);
  }

  close() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      const movimiento = {
        fecha: this.datePipe.transform(this.form.value.fecha, 'yyyy-MM-dd') || '',
        concepto: this.form.value.concepto,
        cantidad: this.form.value.cantidad
      }
      this.addMovimiento(movimiento);
      this.form.reset();
      this.close();
    } else {
      console.log('Form is invalid');
    }
  }
}
