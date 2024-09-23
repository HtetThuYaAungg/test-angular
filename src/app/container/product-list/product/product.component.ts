import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input()
  product!: Product;
  @Input()
  i!: number;

}
