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

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  addMovimiento(item: Movimiento) {
    
  }

  deleteMovimiento(index: number) {
    
  }



}
