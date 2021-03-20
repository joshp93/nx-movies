package com.tmdb.api.search;

import com.tmdb.api.configuration.Configuration;
import com.tmdb.api.movie.Movie;

public class MovieSearchResult {
    private Integer page;
    private Movie[] results;
    private Integer total_pages;
    private Integer total_results;

    public Integer getPage() {
        return page;
    }

    public Integer getTotal_results() {
        return total_results;
    }

    public void setTotal_results(Integer total_results) {
        this.total_results = total_results;
    }

    public Integer getTotal_pages() {
        return total_pages;
    }

    public void setTotal_pages(Integer total_pages) {
        this.total_pages = total_pages;
    }

    public Movie[] getResults() {
        return results;
    }

    public void setResults(Movie[] results) {
        this.results = results;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public MovieSearchResult sanitiseData(Configuration config) {
        for (int i = 0; i < results.length; i++) {
            results[i].sanitiseData(results[i], config);
        }
        return this;
    }
}
