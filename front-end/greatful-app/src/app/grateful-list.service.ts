import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class GratefulListService {

  constructor(private webRequestService: WebRequestService) { }
  
  getGratefulList ()  {
    return this.webRequestService.get('greatful-list')
  }

  newGratefulItem (title: string, description: string) {
    console.log('inside new item service')
    return this.webRequestService.post('add-good', { title, description })
  }
}
