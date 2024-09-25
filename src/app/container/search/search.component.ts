import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgIf,NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();   

  onSearchTextChanged() {
    
  }

  updatedSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    this.searchText == inputEl.value;
    this.searchTextChanged.emit(this.searchText)
    console.log("hello",this.searchText)
  }


}
