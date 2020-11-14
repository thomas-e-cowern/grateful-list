import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GratefulListService } from 'src/app/grateful-list.service';
import { GratefulItem } from 'src/app/models/item.model';
import { WebRequestService} from 'src/app/web-request.service'
import { resolve } from 'url';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  gratefulList: GratefulItem[];

  constructor(private gratefulListService: GratefulListService, private router: Router) { }

  ngOnInit() {
    console.log('inside ngOnInit list-view com')
    this.gratefulListService.getGratefulList().subscribe((gList: any[]) => {
      console.log("glist:", gList);
      this.gratefulList = gList;
    })
  }


  deleteGood (itemId: string) {
    // console.log(itemId)
    this.gratefulListService.deleteGratefulItem(itemId);
    this.gratefulList = this.gratefulList.filter(item => item._id !== itemId)
  }

}
