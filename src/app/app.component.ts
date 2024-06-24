import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PizzaShop.UI';
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
    console.log(this.pizzas);
  }

}
