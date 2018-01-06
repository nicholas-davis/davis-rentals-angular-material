// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatButtonModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';

// Components
import { ContactComponent } from './contact.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],

})
export class ContactModule { }
