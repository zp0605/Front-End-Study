import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsinfoPage } from './newsinfo';

@NgModule({
  declarations: [
    NewsinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsinfoPage),
  ],
})
export class NewsinfoPageModule {}
