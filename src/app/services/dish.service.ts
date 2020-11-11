import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const delayTime = 100;
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(delayTime));
  }
  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(delayTime + 500));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(delayTime + 1000));
  }
  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
}
