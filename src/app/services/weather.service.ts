import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/';
  key = '2ea259d02f0c1f44633414d44b0c45e0';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  getForecast() {
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
