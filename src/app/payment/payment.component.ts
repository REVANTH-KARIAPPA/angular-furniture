import { Component, HostListener } from '@angular/core';

declare var Razorpay:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent{
  message: any = "2000";
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

  paynow() :void{
    this.paymentId = '';
    this.error = '';
    this.options.amount = "200000"; //paise
    this.options.prefill.name = "manish";
    this.options.prefill.email = "manishraw098@gmail.com";
    this.options.prefill.contact="7249907835";   
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }
}
