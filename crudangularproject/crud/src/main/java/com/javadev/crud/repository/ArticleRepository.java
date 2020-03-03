package com.javadev.crud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.javadev.crud.entity.Article;

@CrossOrigin("*")
@RepositoryRestResource
public interface ArticleRepository extends JpaRepository<Article, Long>{
	/**
	 * Finds all Article entries that are saved to the database by key word true.
	 * 
	 * @return List<Article>.
	 */
	@RestResource(path = "/ArticlebyKeyWords")
	public List<Article> findByNameContains(@Param("mc") String mc);
}
