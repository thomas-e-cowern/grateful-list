import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000'
  }

  getAll (uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getOne (uri: string, itemId: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}/${itemId}`);
  }

  post (uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch (uri: string, itemId: string, payload: Object) {
    console.log(`${this.ROOT_URL}/${uri}/${itemId}`,  payload)
    return this.http.patch(`${this.ROOT_URL}/${uri}/${itemId}`, payload).subscribe();
  }

  delete (uri: string, itemId: string) {
    console.log(`${this.ROOT_URL}/${uri}/${itemId}`)
    return this.http.delete(`${this.ROOT_URL}/${uri}/${itemId}`).subscribe((message) => {
      console.log(message)
    })
    
  }
}
