import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToDo } from 'src/app/interfaces/toDo.interface';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDo) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
