package com.javadev.crud.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Article {
	@Id @GeneratedValue
	private Long id;
	private String name;
	private String description;
	private String mail;
	private String tlf;
	
	@ManyToOne
	private Category category;
}
