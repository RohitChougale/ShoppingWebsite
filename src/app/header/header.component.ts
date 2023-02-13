import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:ServiceService ,private CartService:CartService) { }
  data:any

  filterStatus=''
  totalCart=0;

  ngOnInit(): void {
    this.getData();
    this.CartService.getCartCount()
    this.CartService.cartCount.subscribe(res=>{
      this.totalCart=res
    })

  }

  getData(){
    this.service.getData().subscribe
    ((res:any)=>{
      this.data=res;
    })
  }

  add(data:any){
    this.service.addProduct(data)
  }

}
