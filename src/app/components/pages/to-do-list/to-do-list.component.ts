import { Component, OnDestroy } from '@angular/core';
import { ToDo } from 'src/app/interfaces/toDo.interface';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { MatDialog } from '@angular/material';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { ViewModalComponent } from './modals/view-modal/view-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnDestroy {

  toDos: ToDo[] = [];
  currentUserEmail = localStorage.getItem('user_email');

  firebaseSubscription = this.firestoreService.getToDos(this.currentUserEmail).subscribe((res) => {
    if (res) { this.toDos = res.data; } else { this.toDos = []; }
  });

  constructor(
    public dialog: MatDialog,
    public firestoreService: FirestoreService,
    public router: Router) { }

  changeUser(): void {
    localStorage.removeItem('user_email');
    this.router.navigate(['/login']);
  }

  seveToDos(): void {
    this.firestoreService.setToDos(this.currentUserEmail, this.toDos);
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '70%',
      data: { name: '', title: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.toDos.unshift(result); this.seveToDos(); }
    });
  }

  openDialogEdit(toDoInfo: ToDo, index): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '70%',
      data: { title: toDoInfo.title, description: toDoInfo.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toDos[index] = result;
        this.seveToDos();
      }
    });
  }

  openDialogView(toDoInfo): void {
    this.dialog.open(ViewModalComponent, {
      width: '70%',
      data: toDoInfo
    });
  }

  openDialogDelete(index): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toDos.splice(index, 1);
        this.seveToDos();
      }
    });

  }

  ngOnDestroy() {
    this.firebaseSubscription.unsubscribe();
  }
}
