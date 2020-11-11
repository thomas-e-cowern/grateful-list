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

  get (uri: string) {
    console.log('inside web request get', uri)
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
}
