import { IProduct } from "../board-customer/product";
import { IPayment } from "../payment/payment";

export interface IOrder{
  orderId:number;
  orderTotal:number;
  status:boolean;
  payment:IPayment;
  products: IProduct[];
}
