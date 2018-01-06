import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class ContactModule { }
