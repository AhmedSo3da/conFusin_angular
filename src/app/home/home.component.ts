import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';

import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  leader: Leader;
  promotion: Promotion;
  dishErrMess: string;


  constructor(private dishservice: DishService,
    private leaderservice: LeaderService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
      errmess => this.dishErrMess = <any>errmess);

    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);

    this.leaderservice.getFeaturedLeader()
    .subscribe(leader => this.leader = leader);
  }

}
