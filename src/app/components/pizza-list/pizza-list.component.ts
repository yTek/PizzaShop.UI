import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';

@Component({
    selector: 'app-pizza-list',
    templateUrl: './pizza-list.component.html',
    styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
    @Input() pizzas: Pizza[] = [];
}