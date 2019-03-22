import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoListComponent } from './components/pages/to-do-list/to-do-list.component';
import { AddModalComponent } from './components/pages/to-do-list/modals/add-modal/add-modal.component';
import { DeleteModalComponent } from './components/pages/to-do-list/modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/pages/to-do-list/modals/edit-modal/edit-modal.component';
import { ViewModalComponent } from './components/pages/to-do-list/modals/view-modal/view-modal.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment.prod';
import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToDoListComponent,
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    ViewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  entryComponents: [
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    ViewModalComponent
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
