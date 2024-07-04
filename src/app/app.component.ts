import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PizzaShop.UI';
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      console.log(this.pizzas);
    });
  }
}