import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToDo } from '../interfaces/toDo.interface';


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  toDos = this.firestore.collection('todos');

  constructor(private firestore: AngularFirestore) {
    this.toDos.valueChanges().subscribe(res => console.log(res));
  }

  getToDos(email: string): Observable<{ data: ToDo[] }> {
    return this.toDos.doc<{ data: ToDo[] }>(email).valueChanges();
  }

  setToDos(email: string, toDos: ToDo[]): Promise<void> {
    return this.toDos.doc<{ data: ToDo[] }>(email).set({ data: toDos });
  }
}

