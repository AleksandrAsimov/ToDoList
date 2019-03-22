import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToDo } from 'src/app/interfaces/toDo.interface';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDo) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
