import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
