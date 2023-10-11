import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const productId = +idParam;
        this.http.get<any>(`http://localhost:3000/products/${productId}`).subscribe(
          (data) => {
            this.product = data;
          },
          (error) => {
            console.error('Error loading product:', error);
            this.router.navigate(['/products']);
          }
        );
      }
    });
  }
}
