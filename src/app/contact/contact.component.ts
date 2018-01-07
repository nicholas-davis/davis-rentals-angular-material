import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  contactDialog() {
    this.dialog.open(ContactDialogComponent);
  }

}
