import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ModalContentPageModule } from '../pages/modal-content/modal-content.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ModalContentPageModule,
    HomePageRoutingModule
  ],
  declarations:
  [
    HomePage
  ]
})
export class HomePageModule {}
