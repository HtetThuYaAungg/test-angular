import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();   

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }

  updatedSearchText(event:any) {
    this.searchText = event.target.value;
  }
}
