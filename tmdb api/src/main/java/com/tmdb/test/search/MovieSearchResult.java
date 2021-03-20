package com.tmdb.test.search;

import com.tmdb.test.configuration.Configuration;
import com.tmdb.test.movie.Movie;

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
            if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") && 
            (config.getImages().getBackdrop_sizes()[0] != null) && (config.getImages().getBackdrop_sizes()[0] != "") && 
            (results[i].getBackdrop_path() != null) && (results[i].getBackdrop_path() != "")) {
                results[i].setBackdrop_path(config.getImages().getBase_url() + config.getImages().getBackdrop_sizes()[0] + results[i].getBackdrop_path());
            } else {
                results[i].setBackdrop_path("");
            }

            if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") &&
            (config.getImages().getPoster_sizes()[0] != null) && (config.getImages().getPoster_sizes()[0] != "") &&
            (results[i].getPoster_path() != null) && (results[i].getPoster_path() != "")) {
                results[i].setPoster_path(config.getImages().getBase_url() + config.getImages().getPoster_sizes()[0] + results[i].getPoster_path());
            } else {
                results[i].setPoster_path("");
            }
        }
        return this;
    }
}
