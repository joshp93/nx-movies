package com.tmdb.api.movie;

import com.tmdb.api.configuration.Configuration;

public class MovieDetail {
    private Boolean adult;
    private String backdrop_path;
    private Object belongs_to_collection;
    private Integer budget;
    private Object[] genres;
    private String homepage;
    private Integer id;
    private String imdb_id;
    private String original_language;
    private String original_title;
    private String overview;
    private Float popularity;
    private String poster_path;
    private Object[] production_companies ;
    private Object[] production_countries;
    private String release_date;
    private Integer revenue;
    private Integer runtime;
    private Object[] spoken_languages;
    private String status;
    private String tagline;
    private String title;
    private Boolean video;
    private Float vote_average;
    private Integer vote_count;

    public Boolean getAdult() {
        return adult;
    }
    public Integer getVote_count() {
        return vote_count;
    }
    public void setVote_count(Integer vote_count) {
        this.vote_count = vote_count;
    }
    public Float getVote_average() {
        return vote_average;
    }
    public void setVote_average(Float vote_average) {
        this.vote_average = vote_average;
    }
    public Boolean getVideo() {
        return video;
    }
    public void setVideo(Boolean video) {
        this.video = video;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getTagline() {
        return tagline;
    }
    public void setTagline(String tagline) {
        this.tagline = tagline;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Object[] getSpoken_languages() {
        return spoken_languages;
    }
    public void setSpoken_languages(Object[] spoken_languages) {
        this.spoken_languages = spoken_languages;
    }
    public Integer getRuntime() {
        return runtime;
    }
    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }
    public Integer getRevenue() {
        return revenue;
    }
    public void setRevenue(Integer revenue) {
        this.revenue = revenue;
    }
    public String getRelease_date() {
        return release_date;
    }
    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }
    public Object[] getProduction_countries() {
        return production_countries;
    }
    public void setProduction_countries(Object[] production_countries) {
        this.production_countries = production_countries;
    }
    public Object[] getProduction_companies() {
        return production_companies;
    }
    public void setProduction_companies(Object[] production_companies) {
        this.production_companies = production_companies;
    }
    public String getPoster_path() {
        return poster_path;
    }
    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }
    public Float getPopularity() {
        return popularity;
    }
    public void setPopularity(Float popularity) {
        this.popularity = popularity;
    }
    public String getOverview() {
        return overview;
    }
    public void setOverview(String overview) {
        this.overview = overview;
    }
    public String getOriginal_title() {
        return original_title;
    }
    public void setOriginal_title(String original_title) {
        this.original_title = original_title;
    }
    public String getOriginal_language() {
        return original_language;
    }
    public void setOriginal_language(String original_language) {
        this.original_language = original_language;
    }
    public String getImdb_id() {
        return imdb_id;
    }
    public void setImdb_id(String imdb_id) {
        this.imdb_id = imdb_id;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getHomepage() {
        return homepage;
    }
    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }
    public Object[] getGenres() {
        return genres;
    }
    public void setGenres(Object[] genres) {
        this.genres = genres;
    }
    public Integer getBudget() {
        return budget;
    }
    public void setBudget(Integer budget) {
        this.budget = budget;
    }
    public Object getBelongs_to_collection() {
        return belongs_to_collection;
    }
    public void setBelongs_to_collection(Object belongs_to_collection) {
        this.belongs_to_collection = belongs_to_collection;
    }
    public String getBackdrop_path() {
        return backdrop_path;
    }
    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }
    public void setAdult(Boolean adult) {
        this.adult = adult;
    }

    public MovieDetail sanitiseData(MovieDetail movieDetail, Configuration config) {
        if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") && 
            (config.getImages().getBackdrop_sizes()[config.getImages().getBackdrop_sizes().length - 2] != null) && (config.getImages().getBackdrop_sizes()[config.getImages().getBackdrop_sizes().length - 2] != "") && 
            (movieDetail.getBackdrop_path() != null) && (movieDetail.getBackdrop_path() != "")) {
                movieDetail.setBackdrop_path(config.getImages().getBase_url() + config.getImages().getBackdrop_sizes()[0] + movieDetail.getBackdrop_path());
            } else {
                movieDetail.setBackdrop_path("");
            }

            if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") &&
            (config.getImages().getPoster_sizes()[config.getImages().getPoster_sizes().length - 1] != null) && (config.getImages().getPoster_sizes()[config.getImages().getPoster_sizes().length - 1] != "") &&
            (movieDetail.getPoster_path() != null) && (movieDetail.getPoster_path() != "")) {
                movieDetail.setPoster_path(config.getImages().getBase_url() + config.getImages().getPoster_sizes()[0] + movieDetail.getPoster_path());
            } else {
                movieDetail.setPoster_path("");
            }
        return movieDetail;
    }
}
