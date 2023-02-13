import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { filter, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  cartNo = 0;
  cc: any;
  Total: any;

  ngOnInit(): void {
    // this.getSubTotal();
  }
  getData() {
    return this.http.get('http://localhost:3000/posts');
  }

  addProduct(data: {
    id: number;
    title: string;
    price: number;
    desc: string;
    cat: string;
    img: string;
    qty: number;
    total: number;
  }) {
    this.http.post('http://localhost:3000/cart', data).subscribe(
      (res) => {
        console.log(res);
        this.cartNo++;
        console.log(this.cartNo);
      },
      (error) => {
        alert('Product Already added to cart');
      }
    );
  }

  updateTotal(data: any) {
    this.http
      .put('http://localhost:3000/profile/', { subTotal: data })
      .subscribe((res) => {
        console.log('service put' + res);
      });
  }

  // getSubTotal(){
  //   return this.http.get("http://localhost:3000/profile").subscribe(res=>{
  //     console.log("get Total"+res);

  //   })
  // }
  getTotal() {
    this.http.get('http://localhost:3000/profile').subscribe((res: any) => {
      this.Total = res;
      console.log('total' + res);
      return this.Total;
    });
  }
}
