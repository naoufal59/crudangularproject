import { Article } from './../article';
import { Observable } from 'rxjs';
import { ArticleServiceService } from './../service/article-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  public articles;
  
  constructor(private articleService:ArticleServiceService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.articleService.getArticlesList().subscribe( data => {
      this.articles = data;
    },
    err => {
      console.log(err);
    }
  );
  }
}
