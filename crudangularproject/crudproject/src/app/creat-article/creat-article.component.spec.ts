import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatArticleComponent } from './creat-article.component';

describe('CreatArticleComponent', () => {
  let component: CreatArticleComponent;
  let fixture: ComponentFixture<CreatArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
