import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.server';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  orderItems: any[] = [];
  totalPrice: number = 0;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    const orderId = 1; // כאן את צריכה להכניס את מזהה ההזמנה שברצונך לשלוף
    this.paymentService.getOrderDetails(orderId).subscribe(data => {
      this.orderItems = data.orderItems;
      this.totalPrice = data.totalPrice;
    });
  }
}


/*import { Component, OnInit } from '@angular/core';
import { OrderService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  orderItems: any[] = [];
  totalPrice: number = 0;

  /*constructor(private paymentService: OrderService) {}

  ngOnInit(): void {
    this.paymentService.getOrderItems().subscribe((items: OrderItem[]) => {
      this.orderItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.orderItems.reduce((acc, item) => acc + (item.catalog.price * item.quantity), 0);
  }
}


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    const orderId = 1; // כאן את צריכה להכניס את מזהה ההזמנה שברצונך לשלוף
    this.orderService.getOrderDetails(orderId).subscribe(data => {
      this.orderItems = data.orderItems;
      this.totalPrice = data.totalPrice;
    });
  }
}*/

