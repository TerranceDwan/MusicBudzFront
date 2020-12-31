import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { Review } from '../../models/Review'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:HttpClient) { }

  postReview(name,  type, userId, artistName, rating, title, review):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('type', type);
    params = params.append('userId', userId);
    params = params.append('artistName', artistName);
    params = params.append('rating', rating);
    params = params.append('title', title);
    params = params.append('review', review);
    
    return this.httpClient.post("", {}, {headers:headers,withCredentials:true,params:params});
  }

  updateReview(reviewId, name, type, userId, artistName, rating, title, review):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('reviewId', reviewId);
    params = params.append('name', name);
    params = params.append('type', type);
    params = params.append('userId', userId);
    params = params.append('artistName', artistName);
    params = params.append('rating', rating);
    params = params.append('title', title);
    params = params.append('review', review);
    
    return this.httpClient.post("", {}, {headers:headers,withCredentials:true,params:params});
  }

  getReview(reviewId) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('reviewId', reviewId);
    return this.httpClient.get("", {headers:headers,withCredentials:true,params:params}) as Observable<Review[]>;
  }

  deleteReview(reviewId, name, type, userId, artistName, rating, title, review):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('reviewId', reviewId);
    params = params.append('name', name);
    params = params.append('type', type);
    params = params.append('userId', userId);
    params = params.append('artistName', artistName);
    params = params.append('rating', rating);
    params = params.append('title', title);
    params = params.append('review', review);

    return this.httpClient.post("", {}, {headers:headers,withCredentials:true,params:params})
  }

  //maybe change these to userId 
  getFeed(user) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('user', user);

    return this.httpClient.get("", {headers:headers,withCredentials:true,params:params}) as Observable<Review[]>;
  }

  getReviewsByUser(user) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('user', user);

    return this.httpClient.get("", {headers:headers,withCredentials:true,params:params}) as Observable<Review[]>;
  }

  getRewiewsByName(name) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('name', name);

    return this.httpClient.get("", {headers:headers,withCredentials:true,params:params}) as Observable<Review[]>;
  }
}
