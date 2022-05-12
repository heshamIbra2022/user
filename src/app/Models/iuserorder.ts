import { Ishoppingcartitem } from "./ishoppingcartitem";

export interface Iuserorder {
    id?:number;
    applicationUserId?:string;
    shoppingOrderProducts?:Ishoppingcartitem[];
    


}
