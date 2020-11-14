import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { ViewItemDetailComponent } from './pages/view-item-detail/view-item-detail.component';
import { AboutComponent } from './pages/about/about.component';

const routes : Routes = [
  { path: '', component: ListViewComponent },
  { path: 'add-good', component: AddItemComponent },
  { path: 'edit-good/:itemId', component: EditItemComponent},
  { path: 'view-item-detail/:itemId', component: ViewItemDetailComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
