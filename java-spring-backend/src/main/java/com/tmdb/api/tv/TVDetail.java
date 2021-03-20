package com.tmdb.api.tv;

import com.tmdb.api.configuration.Configuration;

public class TVDetail {
    private String backdrop_path;
    private Object[] created_by;
    private Integer[] episode_run_time;
    private String first_air_date;
    private Object[] genres;
    private String homepage;
    private Integer id;
    private Boolean in_production;
    private String[] languages;
    private String last_air_date;
    private Object last_episode_to_air;
    private String name;
    private Object next_episode_to_air;
    private Object[] networks;
    private Integer number_of_episodes;
    private Integer number_of_seasons;
    private String[] origin_country;
    private String original_language;
    private String original_name;
    private String overview;
    private Float popularity;
    private String poster_path;
    private Object[] production_companies;
    private Object[] production_countries;
    private Object[] seasons;
    private Object[] spoken_languages;
    private String status;
    private String tagline;
    private String type;
    private Boolean video;
    private Float vote_average;
    private Integer vote_count;

    public Integer getVote_count() {
        return vote_count;
    }
    public Object[] getSeasons() {
        return seasons;
    }
    public void setSeasons(Object[] seasons) {
        this.seasons = seasons;
    }
    public String[] getOrigin_country() {
        return origin_country;
    }
    public void setOrigin_country(String[] origin_country) {
        this.origin_country = origin_country;
    }
    public Integer getNumber_of_seasons() {
        return number_of_seasons;
    }
    public void setNumber_of_seasons(Integer number_of_seasons) {
        this.number_of_seasons = number_of_seasons;
    }
    public Integer getNumber_of_episodes() {
        return number_of_episodes;
    }
    public void setNumber_of_episodes(Integer number_of_episodes) {
        this.number_of_episodes = number_of_episodes;
    }
    public Object[] getNetworks() {
        return networks;
    }
    public void setNetworks(Object[] networks) {
        this.networks = networks;
    }
    public Object getNext_episode_to_air() {
        return next_episode_to_air;
    }
    public void setNext_episode_to_air(Object next_episode_to_air) {
        this.next_episode_to_air = next_episode_to_air;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Object getLast_episode_to_air() {
        return last_episode_to_air;
    }
    public void setLast_episode_to_air(Object last_episode_to_air) {
        this.last_episode_to_air = last_episode_to_air;
    }
    public String getLast_air_date() {
        return last_air_date;
    }
    public void setLast_air_date(String last_air_date) {
        this.last_air_date = last_air_date;
    }
    public String[] getLanguages() {
        return languages;
    }
    public void setLanguages(String[] languages) {
        this.languages = languages;
    }
    public Integer[] getEpisode_run_time() {
        return episode_run_time;
    }
    public void setEpisode_run_time(Integer[] episode_run_time) {
        this.episode_run_time = episode_run_time;
    }
    public String getFirst_air_date() {
        return first_air_date;
    }
    public void setFirst_air_date(String first_air_date) {
        this.first_air_date = first_air_date;
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
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
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
    public String getOriginal_name() {
        return original_name;
    }
    public void setOriginal_name(String original_title) {
        this.original_name = original_title;
    }
    public String getOriginal_language() {
        return original_language;
    }
    public void setOriginal_language(String original_language) {
        this.original_language = original_language;
    }
    public Boolean getIn_production() {
        return in_production;
    }
    public void setIn_production(Boolean in_production) {
        this.in_production = in_production;
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
    public Object[] getcreated_by() {
        return created_by;
    }
    public void setcreated_by(Object[] created_by) {
        this.created_by = created_by;
    }
    public String getBackdrop_path() {
        return backdrop_path;
    }
    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    public TVDetail sanitiseData(TVDetail tvDetail, Configuration config) {
        if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") && 
            (config.getImages().getBackdrop_sizes()[config.getImages().getBackdrop_sizes().length - 2] != null) && (config.getImages().getBackdrop_sizes()[config.getImages().getBackdrop_sizes().length - 2] != "") && 
            (tvDetail.getBackdrop_path() != null) && (tvDetail.getBackdrop_path() != "")) {
                tvDetail.setBackdrop_path(config.getImages().getBase_url() + config.getImages().getBackdrop_sizes()[0] + tvDetail.getBackdrop_path());
            } else {
                tvDetail.setBackdrop_path("");
            }

            if ((config.getImages().getBase_url() != null) && (config.getImages().getBase_url() != "") &&
            (config.getImages().getPoster_sizes()[config.getImages().getPoster_sizes().length - 1] != null) && (config.getImages().getPoster_sizes()[config.getImages().getPoster_sizes().length - 1] != "") &&
            (tvDetail.getPoster_path() != null) && (tvDetail.getPoster_path() != "")) {
                tvDetail.setPoster_path(config.getImages().getBase_url() + config.getImages().getPoster_sizes()[0] + tvDetail.getPoster_path());
            } else {
                tvDetail.setPoster_path("");
            }
        return tvDetail;
    }
}
