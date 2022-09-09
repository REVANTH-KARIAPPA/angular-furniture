import { Component,HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order/order';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';

import { IPayment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  oid: number;
  currentUser: any;
  orders: IOrder;
  payment: IPayment={
    paymentId:0,
    paymentAmount: 0,
    method: "online",
    email: "reanthkariappa7@gmail.com"
  }
  content: string;
  message: string;





  constructor(private productService: ProductService,
    private token: TokenStorageService,
    private route: ActivatedRoute) {
    this.oid = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.oid);

  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.payment.email=this.currentUser.email;
    this.fetchOrderById();


  }
  fetchOrderById() {

    this.productService.orderById(this.oid).subscribe(
      data => {
        this.orders = data;
        this.payment.paymentAmount=this.orders.orderTotal;
        this.payment.paymentId=this.orders.payment.paymentId;
       },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  sendPayment(): void {
    this.productService.doPayment(this.orders.payment.paymentId,this.oid,this.payment).subscribe(
      data => {


      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  paynow():void{
    this.orders.status=true;
    this.sendPayment();
  }

}
