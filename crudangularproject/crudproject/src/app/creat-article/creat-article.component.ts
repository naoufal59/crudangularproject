import { Article, Category } from './../article';
import { ArticleServiceService } from './../service/article-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-article',
  templateUrl: './creat-article.component.html',
  styleUrls: ['./creat-article.component.css']
})
export class CreatArticleComponent implements OnInit {

  constructor(private router: Router, private articleService : ArticleServiceService) { }
  submitted = false;
  public categories ;
  article : Article = new Article();
  itemSelected : number;
  ngOnInit(): void {
    this.reloadData();
  }
  onSelectedItem(va){
    this.itemSelected = va;
    console.log('the value was selected ' +  this.itemSelected);
   }
  onSaveArticle() {
    //this.article.idCategorie = this.itemSelected ;
    console.log(this.article.idCategorie);
    console.log(this.article.mail);
    console.log(this.article.description);
    console.log(this.article.name);
    this.articleService.createArticle(this.article)
      .subscribe(data => console.log(data), error => console.log(error));
    this.article = new Article();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.onSaveArticle();    
  }

  gotoList() {
    this.router.navigate(['/ListArticles']);
  }

  reloadData() {
    this.articleService.getCategoryList().subscribe( data => {
      this.categories = data;
      console.log(this.categories);
    },
    err => {
      console.log(err);
    }
  );
  }

  
}
