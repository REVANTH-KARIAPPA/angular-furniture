import { IProduct } from "../board-customer/product";

export interface IOrder{
  orderId:number;
  orderTotal:number;
  products: IProduct[];
}
