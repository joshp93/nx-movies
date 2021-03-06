package com.tmdb.api.search;

import com.tmdb.api.configuration.Configuration;
import com.tmdb.api.tv.TV;

public class TVSearchResult {
    private Integer page;
    private TV[] results;
    private Integer total_results;
    private Integer total_pages;
    
    public Integer getPage() {
        return page;
    }
    public Integer getTotal_pages() {
        return total_pages;
    }
    public void setTotal_pages(Integer total_pages) {
        this.total_pages = total_pages;
    }
    public Integer getTotal_results() {
        return total_results;
    }
    public void setTotal_results(Integer total_results) {
        this.total_results = total_results;
    }
    public TV[] getResults() {
        return results;
    }
    public void setResults(TV[] results) {
        this.results = results;
    }
    public void setPage(Integer page) {
        this.page = page;
    }

    public TVSearchResult sanitiseData(Configuration config) {
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
