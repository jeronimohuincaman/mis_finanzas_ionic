import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMovimientosPage } from './tab-movimientos.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TabMovimientosPageRoutingModule } from './tab-movimientos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabMovimientosPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TabMovimientosPage],
  providers: [DatePipe]
})
export class Tab2PageModule { }
