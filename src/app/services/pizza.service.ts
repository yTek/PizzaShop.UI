import { Injectable, NgZone } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = `${environment.apiUrl}/Pizzas`;

  constructor(private http: HttpClient) { }


  public getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl).pipe(
      catchError(this.handleError<Pizza[]>('getPizzas', []))
    );
  }

  public getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
    );
  }

  public updatePizza(pizza: Pizza): Observable<any> {
    return this.http.put(`${this.apiUrl}/${pizza.id}`, pizza, this.httpOptions).pipe(
      catchError(this.handleError<Pizza>(`updatePizza`))
    );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
}
