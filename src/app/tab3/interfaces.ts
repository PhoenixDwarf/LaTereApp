export interface Order{
    name:  string;
    price: number;
    options: string[];
    userPhone?: string;
}
export interface OrderToSubmit{
    products: Order[];
    totalprice: number;
    userName: string;
    userLastname:string;
    userPhone: string;
    userAddress: string;
    userNeighborhood: string; 
    userComments: string;
}


