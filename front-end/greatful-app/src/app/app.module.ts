import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './pages/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddItemComponent
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
