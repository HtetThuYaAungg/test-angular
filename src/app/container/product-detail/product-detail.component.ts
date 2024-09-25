import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  product!: Product
  
  @Input()
  testHandleClick!: () => void

}
