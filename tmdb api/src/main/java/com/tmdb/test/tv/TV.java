package com.tmdb.test.tv;

public class TV {
    private String backdrop_path;
    private String first_air_date;
    private Integer[] genre_ids;
    private Integer id;
    private String name;
    private String[] origin_country;
    private String original_language;
    private String original_name;
    private String overview;
    private Float popularity;
    private String poster_path;
    private Float vote_average;
    private Float vote_count;
    
    public String getBackdrop_path() {
        return backdrop_path;
    }
    public Float getVote_count() {
        return vote_count;
    }
    public void setVote_count(Float vote_count) {
        this.vote_count = vote_count;
    }
    public Float getVote_average() {
        return vote_average;
    }
    public void setVote_average(Float vote_average) {
        this.vote_average = vote_average;
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
    public String getOriginal_name() {
        return original_name;
    }
    public void setOriginal_name(String original_name) {
        this.original_name = original_name;
    }
    public String getOriginal_language() {
        return original_language;
    }
    public void setOriginal_language(String original_language) {
        this.original_language = original_language;
    }
    public String[] getOrigin_country() {
        return origin_country;
    }
    public void setOrigin_country(String[] origin_country) {
        this.origin_country = origin_country;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Integer[] getGenre_ids() {
        return genre_ids;
    }
    public void setGenre_ids(Integer[] genre_ids) {
        this.genre_ids = genre_ids;
    }
    public String getFirst_air_date() {
        return first_air_date;
    }
    public void setFirst_air_date(String first_air_date) {
        this.first_air_date = first_air_date;
    }
    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }
}
