import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisieCoursPageRoutingModule } from './saisie-cours-routing.module';

import { SaisieCoursPage } from './saisie-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisieCoursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SaisieCoursPage]
})
export class SaisieCoursPageModule {}
