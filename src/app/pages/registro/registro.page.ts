import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; 
import { FormatearFechaPipe } from '../../pipes/formatear-fecha-pipe';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false
})
export class RegistroPage implements OnInit {

  nombre: any='';
  apellido: any='';
  selectedOption: any=''; // nivel de estudios
  selectedDate: any='';
  usuario: any='';
  password: any='';

  constructor(private alertController: AlertController, private menu: MenuController, 
              private FormatearFechaPipe:FormatearFechaPipe ) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  
async presentAlert(message: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: message,
    buttons: ['OK']
  });

   await alert.present();
  }

    guardar() 
    { 

      const fechaFormateada = this.FormatearFechaPipe.transform(this.selectedDate);

      if (this.nombre.trim() === '' || this.apellido.trim() === '') {
        this.presentAlert('Error: nombre y apellido vacios');
      } else {
        this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+fechaFormateada);  //
      }
  }

}
