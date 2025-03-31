import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabMovimientosPage } from './tab-movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: TabMovimientosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabMovimientosPageRoutingModule {}
