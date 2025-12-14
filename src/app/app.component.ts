import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

async goToHome() {
  await this.menu.close(); // o await this.menu.close('mainMenu')
  // ahora navega
  await this.router.navigate(['/home']);
}

async goToRegistro() {
  await this.menu.close(); // o await this.menu.close('mainMenu')
  // ahora navega
  await this.router.navigate(['/registro']);
}

async goToPago() {
  await this.menu.close(); // o await this.menu.close('mainMenu')
  // ahora navega
  await this.router.navigate(['/pago']);
}


  cerrarSesion(){
    console.log('Sesión cerrada');
    this.menu.close('mainMenu'); //cierre menú 
    this.router.navigate(['/login'])
  }


}
