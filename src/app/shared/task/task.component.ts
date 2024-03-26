import {Component, Input} from '@angular/core';
import {Task} from "../../model/task";
import {Complexity} from "../../model/complexity";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task!: Task

  TaskComponent() {
    this.task.title = "asd"
    this.task.content = "asd"
    this.task.complexity = Complexity.LOW
    this.task.topic = "asd"
  }
}
