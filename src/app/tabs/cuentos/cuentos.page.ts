import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';  

interface Cuento {
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
  standalone: false
})
export class CuentosPage implements OnInit {
  
  cuentos: Cuento[] = [
  { nombre: 'El león y el ratón', descripcion: 'Un pequeño ratón libera a un león atrapado en una red. Enseña que ningún acto de bondad es insignificante.', imagen: 'assets/img/leon.png' },
  { nombre: 'La tortuga y la liebre', descripcion: 'Una liebre burlona aprende que la constancia y la paciencia superan a la arrogancia y la prisa.', imagen: 'assets/img/tortuga.png' },
  { nombre: 'Caperucita Roja', descripcion: 'Una niña desobedece a su madre y se encuentra con un lobo en el bosque. Enseña a ser prudente y obediente.', imagen: 'assets/img/Caperucita.png' },
  { nombre: 'El patito feo', descripcion: 'Un patito diferente sufre rechazo, pero al crecer se convierte en un hermoso cisne. Habla sobre la aceptación y la autoestima.', imagen: 'assets/img/pato.png' },
  { nombre: 'Los tres cerditos', descripcion: 'Tres hermanos construyen casas con distintos materiales y aprenden el valor del trabajo y la previsión.', imagen: 'assets/img/cerditos.png' }
  ];

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
