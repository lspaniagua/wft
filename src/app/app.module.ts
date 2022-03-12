import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { NumberToArrayPipe } from './shared/pipes/number-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    NumberToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
