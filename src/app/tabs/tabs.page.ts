import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  icon = '././assets/icon/pedidosVectorNEW.svg'
  constructor(
    private OrdersService: OrdersService
  ) 
  {}

ngOnInit() {
  this.OrdersService.isThereOrder$.subscribe((res) =>{
    if (res == true){
      this.icon = '././assets/icon/pedidosVectorONEW.svg';
    }
    else{
      this.icon = '././assets/icon/pedidosVectorNEW.svg';
    }
  })
}

}
