import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ArticlesComponent} from './articles/articles.component';
import {ContactComponent} from './contact/contact.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {WorkExpComponent} from './workexp/workexp.component';
import {PageNotFoundComponent} from './common/not-found.component';
import {StickyNoteComponent} from './common/component/stickynote.component';
import {FlipCard} from './common/component/flipcard.component';
import {ImageChipComponent} from './common/component/imagechip.component';
import {MdSnackBar} from '@angular/material';


import {DataService} from './common/dataservice';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomRoutingModule} from './common/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomMaterialModule} from './common/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactComponent,
    DashboardComponent,
    NavigationComponent,
    ShowcaseComponent,
    WorkExpComponent,
    PageNotFoundComponent,
    StickyNoteComponent,
    FlipCard,
    ImageChipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
