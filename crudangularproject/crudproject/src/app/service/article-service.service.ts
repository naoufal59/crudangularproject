import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
 
  private baseUrl    = 'http://localhost:8081/articles';
  private baseUrlCat = 'http://localhost:8081/categories';
  
  constructor(private http: HttpClient) { }
 
  createArticle(article: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, article);
  }
  getArticlesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getCategoryList(): Observable<any> {
    return this.http.get(`${this.baseUrlCat}`);
  }
  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateArticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

 
}
