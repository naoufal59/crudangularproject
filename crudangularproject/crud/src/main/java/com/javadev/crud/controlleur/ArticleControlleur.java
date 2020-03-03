package com.javadev.crud.controlleur;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.javadev.crud.entity.Article;
import com.javadev.crud.repository.ArticleRepository;

@RestController
@CrossOrigin("*")
public class ArticleControlleur {
   
	@Autowired
	public ArticleRepository articleRepository;
	
	@GetMapping(path = "/listArticles")
	public List<Article> allProduct() {
		return articleRepository.findAll();
	}

	@GetMapping(path = "/listArticles/{id}")
	public Optional<Article> getProduct(@PathVariable(name = "id") Long id) {
		return articleRepository.findById(id);
	}

	
}
