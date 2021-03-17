package com.tmdb.test.searchResult;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/movies")
public class SearchResultController {
    private final String rootUri = "http://localhost:8080/api/v1/";

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public SearchResult[] getMovies(@RequestParam String query) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .uri(URI.create(rootUri + "movies?query=" + query + "&api_key=66b5c7fda06a1512aab3bf907e61d85c"))
            .timeout(Duration.ofSeconds(30))
            .build();
        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(response.body(), new TypeReference<SearchResult[]>() {});
    }
}
