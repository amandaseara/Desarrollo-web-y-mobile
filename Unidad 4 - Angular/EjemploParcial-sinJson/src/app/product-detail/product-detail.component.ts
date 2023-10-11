import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../Data-products/products-list';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const productId = +idParam; // Intenta convertir el valor a número
        this.product = PRODUCTS.find((p) => p.id === productId);
        if (!this.product) {
          // Si el producto no se encuentra
          this.router.navigate(['/products']);
        }
      }
    });
  }

}
