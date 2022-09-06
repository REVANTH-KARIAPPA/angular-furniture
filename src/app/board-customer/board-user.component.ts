import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { IProduct } from './product';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;
  products : IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getUserBoard().subscribe(
      data => {
        this.products= data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  addToCart():number{ 
      return 0;
  }

}
