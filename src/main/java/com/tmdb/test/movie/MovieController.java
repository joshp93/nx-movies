package com.tmdb.test.movie;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Movie getMovie() {
       return new Movie();
    }
}
