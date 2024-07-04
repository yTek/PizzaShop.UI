import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        PizzaListComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }