import {Component} from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksPageComponent {

  handleSearch(searchPrompt: string) {
    console.log(searchPrompt)
  }

}
