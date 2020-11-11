import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GratefulListService } from 'src/app/grateful-list.service';
import { GratefulItem } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private gratefulListService: GratefulListService, private router: Router) { }

  ngOnInit() {
  }

  createItem (name: string, description: string) {
    console.log('name', name, 'description', description)
    this.gratefulListService.newGratefulItem( name, description ).subscribe((gratefulItem: GratefulItem) => {
      console.log(gratefulItem)
      this.router.navigate(['/grateful-list']);
    })
  }

}
