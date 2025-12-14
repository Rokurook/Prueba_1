import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentosPage } from './cuentos.page';

const routes: Routes = [
  {
    path: '',
    component: CuentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentosPageRoutingModule {}
