import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  @Input('rating')rating:Ratings = {
    ratingsAvg:0,
    totalReviews:0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Ratings{
  totalReviews:number;
  ratingsAvg:number;
}