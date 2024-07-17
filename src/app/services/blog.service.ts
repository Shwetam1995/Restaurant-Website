import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogApi = "https://dummyapi.online/api/blogposts";

  constructor(private http: HttpClient) { }

  postData() {
    return this.http.get<any[]>(this.blogApi);
  }
}
