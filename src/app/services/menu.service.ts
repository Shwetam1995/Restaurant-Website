import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  postData() {
    throw new Error('Method not implemented.');
  }
  private menuApi = 'https://api.dummyrestaurant.com/v1';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.menuApi);
  }
}
