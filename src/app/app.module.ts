import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FullHeightBlockComponent } from './full-height-block/full-height-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullHeightBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
