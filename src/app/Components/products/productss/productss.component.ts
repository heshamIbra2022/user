import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { Ishoppingcartitem } from 'src/app/Models/ishoppingcartitem';
import { CategoryapiserviceService } from 'src/app/ٍServices/categoryapiservice.service';
import { ProductapiserviceService } from 'src/app/ٍServices/productapiservice.service';
import { ShoppingCartServiceService } from 'src/app/ٍServices/shopping-cart-service.service';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrls: ['./productss.component.scss']
})
export class ProductssComponent implements OnInit,OnChanges{
  selectedCatID:number=0;
  

  categoryList:Icategory[]=[];
  productListOfCat:Iproduct[]=[];
  productImg:string="";
  constructor(private myCategoryService:CategoryapiserviceService,
    private productdAPIService: ProductapiserviceService,
    private CartOrderService:ShoppingCartServiceService,
    private userAuthAPIService: UserAuthenticationService,


    private router:Router
    
    ) 
    {
      
      
     }


     getproduct()
     {
       if(this.selectedCatID==0)
       {
        this.productdAPIService.getAllProducts().subscribe(prdList=>{
          this.productListOfCat=prdList;
        });
  
       }
       else{
      this.productdAPIService.getProductsByCategoryID(this.selectedCatID).subscribe((prdList) =>{
        this.productListOfCat=prdList;
      
      });
    } 
     }


  ngOnChanges(changes: SimpleChanges): void {
   
  }

     

  

  ngOnInit(): void {
    this.myCategoryService.getAllCategories().subscribe((catlist) => {this. categoryList=catlist;
     
    
      })

      this.productdAPIService.getAllProducts().subscribe(prdList=>{
        this.productListOfCat=prdList;
      });

  }
displaystyleOfpop="none";
  displayStyle = "none";
  
  openPopup(prdimg:string) {
    this.displayStyle = "block";
    this.productImg=prdimg;

    setTimeout(() => {
      this.closePopup()
    }, 2500);
  }
  
  
  closePopup() {
    this.displayStyle = "none";
    this.displaystyleOfpop="none";
  }
  sendObject(itemsCount:number ,prd:Iproduct)
  {
  
    var orderId :any= localStorage.getItem("orderid");
    var ordId:number=parseInt(orderId) ;
var Cartitem :Ishoppingcartitem={
  productId:prd.id,
  categoryId:prd.categoryId,
  img:prd.img,
  name:prd.name,
    quantity:itemsCount,
    price:prd.price,
userOrderId:ordId
} ;
if(this.userAuthAPIService.isUserLoggged)
{
  if(itemsCount<=prd.quantity && Cartitem.quantity !=0){
    this.CartOrderService.addNewCartItem(Cartitem).subscribe();
  
   (<HTMLInputElement>document.getElementById("myMsg")).innerHTML="the item is added to your card successfully";
    this.displaystyleOfpop = "block";
    setTimeout(() => {
      this.closePopup()
    }, 2000);
  }
  else
  {
    (<HTMLInputElement>document.getElementById("myMsg")).innerHTML="amount of item is Insufficient";
  
    this.displaystyleOfpop = "block";
  
    setTimeout(() => {
      this.closePopup()
    }, 2000);
  }
}
else
{
  alert ('You must login First...');
  this.router.navigate(['/user/userlogin']);
 
}


  }
  
}
