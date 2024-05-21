import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public weatherNow: any[] = [];
  public temp: number = 0;
  public city: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().subscribe(result => {
      if(result) {
        this.weatherNow = result.weather;
        this.temp = result.main.temp;
        this.city = result.name;
      }
    })
  }

}
