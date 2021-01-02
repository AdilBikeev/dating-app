import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import ruLocale from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

/**
 * Добавляем локализацию
 */
registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
