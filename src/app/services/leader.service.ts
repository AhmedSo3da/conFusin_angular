import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const delayTime = 1000;

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(delayTime));
  }
  getLeader(id: string): Observable<Leader> {
    return of((LEADERS.filter((leader) => (leader.id === id))[0])).pipe(delay(delayTime));
  }
  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(delayTime));
  }
}
