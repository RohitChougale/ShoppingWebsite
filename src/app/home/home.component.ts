import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService,private http:HttpClient,private cartService:CartService) { }

  AllProduct:any
  total:number=0;

  ngOnInit(): void {
    this.service.getData().subscribe((res:any)=>{
      this.AllProduct=res;
    })
  }

  add(data:any){
    this.service.addProduct(data);
    this.total+=data.price
    this.service.updateTotal(this.total);
    this.cartService.getCartCount();
    // this.service.getTotal();
  }



}
