import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  searchPrompt: string = ""

  search() {
    this.searchEmitter.emit(this.searchPrompt)
  }
}
