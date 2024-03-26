import { Component } from '@angular/core';
import {Task} from "../../model/task";
import {Complexity} from "../../model/complexity";

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.scss']
})
export class TaskCreationComponent {

  isCreatingTask: boolean = false;
  newTask: Task = {
    title: '',
    content: '',
    author: '',
    complexity: Complexity.LOW,
    topic: '',
    sharedWith: []
  };

  saveTask() {
    if (this.newTask.title && this.newTask.content) {
      // Call a method to handle the task saving logic (e.g., API call)
      // Reset the form and hide it
      this.newTask = { author: '', complexity: Complexity.LOW, sharedWith: [] };
      this.isCreatingTask = false;
    }
  }


}
