import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FullHeightBlockComponent } from './full-height-block/full-height-block.component';
import { HackathonItemsComponent } from './hackathon-items/hackathon-items.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BannerBlockComponent } from './banner-block/banner-block.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullHeightBlockComponent,
    HackathonItemsComponent,
    HomeComponent,
    RegisterComponent,
    BannerBlockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
