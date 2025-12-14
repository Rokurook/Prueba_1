import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentosPageRoutingModule } from './cuentos-routing.module';

import { CuentosPage } from './cuentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentosPageRoutingModule
  ],
  declarations: [CuentosPage]
})
export class CuentosPageModule {}
