import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";


import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardComponent } from './card/card.component';
import { CardInfoComponent } from './card/card-info/card-info.component';
import { AssigneesComponent } from './card/assignees/assignees.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardInfoComponent,
    AssigneesComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
