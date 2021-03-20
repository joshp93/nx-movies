package com.tmdb.api.topten;

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
import com.tmdb.api.configuration.Configuration;
import com.tmdb.api.configuration.ConfigurationController;
import com.tmdb.api.tv.TV;
import com.tmdb.api.search.TVSearchResult;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/tv/popular")
public class TopTVController {
    private final String rootUri = "https://api.themoviedb.org/3/tv/popular";

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public TVSearchResult getTopMovies(@RequestParam String api_key) throws IOException, InterruptedException {
        ConfigurationController configController = new ConfigurationController();
        Configuration config = configController.GetConfiguration();
        
        String encodedApiKey = URLEncoder.encode(api_key, StandardCharsets.UTF_8);
        String endpoint = rootUri + "?api_key=" + encodedApiKey;
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .GET()
            .uri(URI.create(endpoint))
            .timeout(Duration.ofSeconds(30))
            .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

        ObjectMapper mapper = new ObjectMapper();
        TVSearchResult movieSearchResult = mapper.readValue(response.body(), new TypeReference<TVSearchResult>() {}).sanitiseData(config);
        TV[] topMovies = new TV[10];
        for (int i = 0; i < topMovies.length; i++) {
            topMovies[i] = movieSearchResult.getResults()[i];
        }
        movieSearchResult.setResults(topMovies);
        return movieSearchResult;
    }
}
