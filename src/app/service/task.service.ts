import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Task} from "../model/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) {}

  createTask(task: Task): Promise<void> {
    const taskId = this.firestore.createId(); // Generate unique ID
    return this.firestore.collection('tasks').doc(taskId).set(task);
  }

  getTasks(): any {
    return this.firestore.collection('tasks').snapshotChanges();
  }

  updateTask(taskId: string, task: Partial<Task>): Promise<void> {
    return this.firestore.collection('tasks').doc(taskId).update(task);
  }

  deleteTask(taskId: string): Promise<void> {
    return this.firestore.collection('tasks').doc(taskId).delete();
  }
}
