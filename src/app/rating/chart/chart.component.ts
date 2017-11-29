import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';
import { Countrating } from '../countrating.model';
import {NgxChartsModule} from '@swimlane/ngx-charts';

export var single = [
  // {
  //   "name": "Germany",
  //   "value": 8940000
  // },
  // {
  //   "name": "USA",
  //   "value": 5000000
  // },
  // {
  //   "name": "France",
  //   "value": 7200000
  // }
];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [ RatingDataService ]
})
export class ChartComponent implements OnInit {

  private _chart: Array<Number>;

  single : any[] = [];
  multi: any[];

  view: any[] = [900, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mood';
  showYAxisLabel = true;
  yAxisLabel = 'Number of entries';

  colorScheme = {
    domain: ['#fc001e', '#f08333', '#dad82c', '#a3ce58', '#34da2c']
  };

  constructor(private _ratingDataService: RatingDataService) { 
    
    
  }

  ngOnInit() {
    let self = this;
    let test = [];
    this._ratingDataService.ratingPerRatingNumber.subscribe(
      (items) => {
        self.single = self.convertData(items);
        console.log(self.single);
        Object.assign(self, self.single);  
        
      }
        //console.log(items)
        //this._chart = items
        //Object.assign(self, self.convertData(items))
        //self.convertData(items)
        
    );
    //console.log({this.single});
    //Object.assign(self, {test});
     
    //console.log(this._chart); 
    
  }

  get chart() {
    return this._chart;
  }

  convertData(items){
    let results = [];
    let self = this;
    var i;
    for(i = 0; i < items.length; i++){
        items[i].name = items[i]['_id'];
        delete items[i]._id;
        results.push(items[i]);
    }
    
    return results;
  }

}
