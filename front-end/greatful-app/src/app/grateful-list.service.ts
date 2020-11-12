import { Injectable } from '@angular/core';
import { GratefulItem } from './models/item.model';
import { WebRequestService } from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class GratefulListService {

  gratefulItemId: string;

  constructor(private webRequestService: WebRequestService) { }
  
  getGratefulList ()  {
    return this.webRequestService.getAll('greatful-list')
  }

  getGratefulItem (itemId: string) {
    return this.webRequestService.getOne('greatful-list', itemId);
  }

  newGratefulItem (name: string, description: string) {
    return this.webRequestService.post('greatful-list', { name, description })
  }

  updateGratelfulItem (itemId: string, name: string, description: string) {
    return this.webRequestService.patch(`greatful-list`, itemId, {  name, description })
  }

  deleteGratefulItem (itemId: string) {
    return this.webRequestService.delete('greatful-list', itemId);
  }
}
