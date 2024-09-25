import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgIf,SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
 
  searchText: string = "";

  setSearchText(value:string) {
    this.searchText = value;
  }
}
