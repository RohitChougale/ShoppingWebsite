import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any;
  subTotal: any;
  cartCount: any;
  st: any;
  time: any;

  constructor(
    private cartservice: CartService,
    private service: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData() {
    this.cartservice.getData().subscribe((res) => {
      this.cartData = res;
    });
  }
  addqty(data: any) {
    if (data.qty < 20) {
      data.qty++;
      data.total = data.price * data.qty;
      this.cartservice.updateqty(data);
    }
  }

  subqty(data: any) {
    if (data.qty > 0 && data.qty != 1) {
      data.qty--;
      data.total = data.price * data.qty;
      this.cartservice.updateqty(data);
    } else {
      this.remove(data);
      this.subTotal = 0;
    }
  }
  remove(data: any) {
    this.cartservice.delete(data).subscribe((res: any) => {
      console.log(res);
      this.getCartData();
      this.subTotal = 0;
      this.cartservice.getCartCount();
    });
  }

  // getTotal(){

  //   this.http.get("http://localhost:3000/profile").subscribe((res:any)=>{
  //     console.log("cart total"+res);
  //   })

  // }
}
