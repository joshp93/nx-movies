package com.tmdb.test.search;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tmdb.test.configuration.Configuration;
import com.tmdb.test.configuration.ConfigurationController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/tv-shows")
public class TVSearchController {
    private final String rootUri = "https://api.themoviedb.org/3/search/";

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public TVSearchResult getTVShows(@RequestParam String query) throws IOException, InterruptedException {
        ConfigurationController configController = new ConfigurationController();
        Configuration config = configController.GetConfiguration();
        
        String encodedQuery = URLEncoder.encode(query, StandardCharsets.UTF_8); 
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .uri(URI.create(rootUri + "tv?query=" + encodedQuery + "&api_key=66b5c7fda06a1512aab3bf907e61d85c"))
            .timeout(Duration.ofSeconds(30))
            .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(response.body(), new TypeReference<TVSearchResult>() {}).sanitiseData(config);
    }
}
