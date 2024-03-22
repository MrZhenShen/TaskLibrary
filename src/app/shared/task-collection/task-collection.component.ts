import { Component } from '@angular/core';
import {Task} from "../../model/task";

@Component({
  selector: 'app-task-collection',
  templateUrl: './task-collection.component.html',
  styleUrls: ['./task-collection.component.scss']
})
export class TaskCollectionComponent {

  tasks: Task[] = []

}
