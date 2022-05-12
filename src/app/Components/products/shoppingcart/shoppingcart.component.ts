import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { Ishoppingcartitem } from 'src/app/Models/ishoppingcartitem';
import { Iuserorder } from 'src/app/Models/iuserorder';
import { CategoryapiserviceService } from 'src/app/ٍServices/categoryapiservice.service';
import { ProductapiserviceService } from 'src/app/ٍServices/productapiservice.service';
import { ShoppingCartServiceService } from 'src/app/ٍServices/shopping-cart-service.service';
import { UserOrderService } from 'src/app/ٍServices/user-order.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit,OnChanges  {
  totalprice:number=0;
  selectedCatID:number=0;
  cartItemList:Ishoppingcartitem[]=[];
  uoserordercartlist:Iuserorder={}
  constructor(private CartOrderService:ShoppingCartServiceService,
    private productdAPIService: ProductapiserviceService,
private userordersapiservice:UserOrderService
    
    
    ) { 

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
    // this.CartOrderService.getCartItems().subscribe((CartList) => {this.cartItemList=CartList;

    //   for (let i = 0; i < this.cartItemList.length; i++)
    //   {
    //     this.totalprice +=  this.cartItemList[i].price*this.cartItemList[i].quantity;
    //   }
    
    
    // }) 

   let orderid:any=localStorage.getItem("orderid");
      this.userordersapiservice.getorderByID(orderid).subscribe((order)=>{
        this.uoserordercartlist=order;

       this.uoserordercartlist.shoppingOrderProducts?.forEach((item)=>{
this.totalprice +=item.price*item.quantity
        })
        
      })
    
  }
  deleteItem(cartitem:Ishoppingcartitem)
  {
    // this.cartItemList = this.cartItemList.filter(c => c !==cartitem);
    // this.totalprice=0;
    //   for (let i = 0; i < this.cartItemList.length; i++)
    //   {
    //     this.totalprice +=  this.cartItemList[i].price*this.cartItemList[i].quantity;
    //   }
    // this.CartOrderService.deleteCartItem(cartitem.id).subscribe(()=>{
      
    // }
      

    // );


    this.uoserordercartlist.shoppingOrderProducts= this.uoserordercartlist.shoppingOrderProducts?.filter(c => c !==cartitem);
    this.totalprice=0;
    this.uoserordercartlist.shoppingOrderProducts?.forEach((item)=>{
      this.totalprice +=item.price*item.quantity
              })
              
              this.CartOrderService.deleteCartItem(cartitem.id).subscribe(()=>{
      
              }
                
          
              );
          
  }
  // placeOrder()
  // {
  //   for (let i = 0; i < this.cartItemList.length; i++)
  //   {
  //     var prod:Iproduct={
  //       categoryId: 1, id: 1, 
  //       quantity: this.cartItemList[i].quantity, 
  //       name: "aaa0",
  //       price: 0,
  //       img: ''
  //     };
  //     this.productdAPIService.updateProduct(this.cartItemList[i].productId,prod ).subscribe();
     
  //     this.CartOrderService.deleteCartItem(this.cartItemList[i].id).subscribe();

  //   }
  //   this.totalprice=0;
  //   this.cartItemList=[];
  // }
  placeOrder()
  {
    this.uoserordercartlist.shoppingOrderProducts?.forEach((item)=>{
      var prod:Iproduct={
        categoryId:item.categoryId,
         id: item.productId, 
        quantity: item.quantity, 
        name: item.name,
        price: item.price,
        img: ''
      };
      this.productdAPIService.updateProduct(item.productId,prod ).subscribe();
      this.CartOrderService.deleteCartItem(item.id).subscribe();
     
              })
              this.totalprice=0;
              this.uoserordercartlist.shoppingOrderProducts=[];
  }
}
