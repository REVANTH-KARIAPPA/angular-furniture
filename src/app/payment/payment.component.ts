import { Component,HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order/order';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';

import { IPayment } from './payment';
declare var Razorpay: any;
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
    email: "",
  };
  content: string;
  message: string;

  //not my pay

  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_wVTHeU94XK5SIL",
    "amount": "200",
    "name": "SecondFurnitur",
    "description": "for furniture",
    "image": "./assets/img/furnitures.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.successful",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
      this.message=this.options.amount;
    },
    "prefill": {
      "name": "username",
      "email": "username@email.com",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  // not my pay

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
    this.productService.doPayment(this.orders.payment.paymentId, this.payment).subscribe(
      data => {

         console.log(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  paynow():void{
    this.sendPayment();


    this.paymentId = '';
    this.error = '';
    this.options.amount = "200000";
    this.options.prefill.name = "manish";
    this.options.prefill.email = "manishraw098@gmail.com";
    this.options.prefill.contact="7249907835";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
    this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }

}
