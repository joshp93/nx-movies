package com.tmdb.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TMDbAPI {

	public static void main(String[] args) {
		SpringApplication.run(TMDbAPI.class, args);
	}

	public String hello() {
		return "Hello World";
	}
}
