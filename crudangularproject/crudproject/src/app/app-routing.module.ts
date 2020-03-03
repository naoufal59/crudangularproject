import { ListArticleComponent } from './list-article/list-article.component';
import { MenuComponent } from './menu/menu.component';
import { CreatArticleComponent } from './creat-article/creat-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'addArticle' , component : CreatArticleComponent} ,
  {path:'ListArticles' , component : ListArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
