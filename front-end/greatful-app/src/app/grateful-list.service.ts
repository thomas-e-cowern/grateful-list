import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class GratefulListService {

  constructor(private webRequestService: WebRequestService) { }
  
  getGratefulList ()  {
    console.log('inside grateful list service')
    return this.webRequestService.get('greatful-list')
  }
}
