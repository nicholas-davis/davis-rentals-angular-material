// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatButtonModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';

// Components
import { ContactComponent } from './contact.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

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
    ContactDialogComponent
  ],
  entryComponents: [
    ContactDialogComponent
  ],

})
export class ContactModule { }
