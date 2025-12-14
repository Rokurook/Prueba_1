import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: false,
})
export class PagoPage {

  pagoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController
  ) {
    this.pagoForm = this.fb.group({
      metodoPago: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1)]]
    });
  }

  async realizarPago() {
    const toast = await this.toastCtrl.create({
      message: 'Pago realizado con éxito 🎉',
      duration: 2800,
      color: 'success',
      position: 'top'
    });
    toast.present();
    this.pagoForm.reset();
  }

}
