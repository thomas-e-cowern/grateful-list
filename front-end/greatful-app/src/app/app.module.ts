import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewItemDetailComponent } from './pages/view-item-detail/view-item-detail.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddItemComponent,
    EditItemComponent,
    HeaderComponent,
    FooterComponent,
    ViewItemDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
