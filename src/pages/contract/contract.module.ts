import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractPage } from './contract';

@NgModule({
  declarations: [
    ContractPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractPage),
  ],
  exports: [
    ContractPage
  ]
})
export class ContractPageModule {}
