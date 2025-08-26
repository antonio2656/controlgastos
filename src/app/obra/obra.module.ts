import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObraPageRoutingModule } from './obra-routing.module';

import { ObraPage } from './obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObraPageRoutingModule
  ],
  declarations: []
})
export class ObraPageModule {}
