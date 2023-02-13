import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  productDataList: any;
  public cartCount = new Subject<any>();
  total = 0;

  getData() {
    return this.http.get('http://localhost:3000/cart');
  }

  updateqty(data: any) {
    this.http
      .put(`http://localhost:3000/cart/${data.id}`, data)
      .subscribe((res) => {
        console.log(res);
      });
  }

  delete(data: any) {
    return this.http.delete(`http://localhost:3000/cart/${data.id}`);
  }

  getCartCount() {
    this.http.get('http://localhost:3000/cart').subscribe((res) => {
      this.productDataList = res;
      let count = this.productDataList.length;
      this.cartCount.next(count);
    });
  }
}
