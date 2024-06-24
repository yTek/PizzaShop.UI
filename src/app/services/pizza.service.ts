import { Injectable, NgZone } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public getPizzas() : Pizza[]{
    let pizza = new Pizza(0, 'Reine', 10);
    return [pizza];
  }

}
