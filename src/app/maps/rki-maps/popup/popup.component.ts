import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {


  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
  ) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onNotShowAnymore(): void {
    document.cookie = "rki_popup_not_show_anymore=true";

    this.dialogRef.close();

  }

}
