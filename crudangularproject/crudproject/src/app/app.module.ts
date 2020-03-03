import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreatArticleComponent } from './creat-article/creat-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreatArticleComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,HttpClientModule , FormsModule
  
  ],
  providers: [ { 
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CreatArticleComponent),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
