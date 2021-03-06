import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GratefulListService } from 'src/app/grateful-list.service';
import { GratefulItem } from 'src/app/models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

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

  updateGratefulItem (name: string, description: string) {
    console.log("id:", this.itemId, "name:", name, "desc:", description)
    this.gratefulListService.updateGratelfulItem(this.itemId, name, description).subscribe(() => {
      console.log("update done")
      this.router.navigate(['/']);
    });
    
  }
}
