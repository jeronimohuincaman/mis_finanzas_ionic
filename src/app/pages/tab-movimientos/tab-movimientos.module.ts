import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMovimientosPage } from './tab-movimientos.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TabMovimientosPageRoutingModule } from './tab-movimientos-routing.module';
import { FormModalComponent } from './components/form-modal/form-modal.component';

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
  declarations: [TabMovimientosPage, FormModalComponent],
  providers: [DatePipe]
})
export class Tab2PageModule { }
