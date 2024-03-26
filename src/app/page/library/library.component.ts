import {Component, Input} from '@angular/core';
import {Task} from "../../model/task";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

  @Input() tasks: Task[] = [];

  handleSearch(searchPrompt: string) {
    
  }
}
