import { Injectable } from '@angular/core';
import { CityCard } from './shared/city-card.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private cityCardUrl = environment.backendUrl + '/cityCardList/';
  constructor(private http: HttpClient) { }

  list(): Observable<CityCard[]> {
    return this.http.get<CityCard[]>(this.cityCardUrl);
  }
}
