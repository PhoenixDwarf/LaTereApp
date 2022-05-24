import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../tab3/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  newOrder$ = new EventEmitter<Order>();
}
