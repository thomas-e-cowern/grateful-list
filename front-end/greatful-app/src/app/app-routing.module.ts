import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { AddItemComponent } from './pages/add-item/add-item.component';

const routes : Routes = [
  { path: 'grateful-list', component: ListViewComponent },
  { path: 'add-good', component: AddItemComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
