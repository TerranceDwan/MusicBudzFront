import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:HttpClient) { }

  postReview(name,  type, userId, artistName, rating, title, review):Observable<any> {
    return null;
  }
}
