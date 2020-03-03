package com.javadev.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.javadev.crud.entity.Category;
import com.javadev.crud.repository.CategoryRepository;

@SpringBootApplication
public class CrudApplication implements CommandLineRunner {
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Category.class);
		categoryRepository.save(new Category(null, "Ordinateurs", "1"));
		categoryRepository.save(new Category(null, "book", "2"));

	}

}
