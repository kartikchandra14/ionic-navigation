import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContentPageRoutingModule } from './modal-content-routing.module';

import { ModalContentPage } from './modal-content.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

import { AppRoutingModule } from '../../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContentPageRoutingModule,
    SharedComponentsModule,
    AppRoutingModule
  ],
  declarations: [
    ModalContentPage
  ]
})
export class ModalContentPageModule {}
