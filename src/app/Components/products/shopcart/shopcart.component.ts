import { Component, OnInit } from '@angular/core';
import { Iuserorder } from 'src/app/Models/iuserorder';
import { UserOrderService } from 'src/app/ٍServices/user-order.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {
  uoserordercartlist:Iuserorder={}

  constructor(private userordersapiservice:UserOrderService
    ) { }

  ngOnInit(): void {
    this.userordersapiservice.getorderByID(18).subscribe((order)=>{
      this.uoserordercartlist=order;

//         this.uoserordercartlist.ShoppingOrderProducts?.forEach((item)=>{
// this.totalprice +=item.price*item.quantity
//         })
      
    })
  }

}
