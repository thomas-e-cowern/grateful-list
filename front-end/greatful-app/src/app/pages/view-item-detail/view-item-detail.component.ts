import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GratefulListService } from 'src/app/grateful-list.service';
import { GratefulItem } from 'src/app/models/item.model';

@Component({
  selector: 'app-view-item-detail',
  templateUrl: './view-item-detail.component.html',
  styleUrls: ['./view-item-detail.component.css']
})
export class ViewItemDetailComponent implements OnInit {

  itemId: string;
  greatfulItem: GratefulItem;

  constructor(private gratefulListService: GratefulListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.itemId = params.itemId
    })
  
    console.log('itemId:', this.itemId);
    this.gratefulListService.getGratefulItem(this.itemId).subscribe((item: GratefulItem) => {
      console.log('item:', item);
      this.greatfulItem = item;
    }) 
      
  }

  goBack () {
    this.router.navigate(['/']);
  }

}
