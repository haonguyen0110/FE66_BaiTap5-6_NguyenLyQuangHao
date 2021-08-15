import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapModule } from './BaiTap/BaiTap.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaiTapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
