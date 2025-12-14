import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  // Método para mostrar alerta
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Validación de email
  validarEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  async login() {

    // Validar email vacío
    if (!this.email) {
      await this.mostrarAlerta('El campo de correo no puede estar vacío.');
      return;
    }

    // Validar formato de email
    if (!this.validarEmail(this.email)) {
      await this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    // Validar password vacía
    if (!this.password) {
      await this.mostrarAlerta('La contraseña no puede estar vacía.');
      return;
    }

    // Validar largo contraseña (3 a 4 caracteres según tus tests)
    if (this.password.length > 4) {
      await this.mostrarAlerta('La contraseña no puede tener más de 4 caracteres.');
      return;
    }

    // Si todo está OK → navegar al home
    this.navCtrl.navigateForward(['/home'], {
      queryParams: {
        email: this.email,
        password: this.password
      }
    });
  }

  // Navega a registro (debe llamarse CrearCuenta para que el test lo encuentre)
  CrearCuenta() {
    this.navCtrl.navigateForward(['/registro']);
  }
}
