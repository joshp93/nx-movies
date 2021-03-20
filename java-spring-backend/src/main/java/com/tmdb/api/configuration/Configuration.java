package com.tmdb.api.configuration;

public class Configuration {
    private Images images;
    private String[] change_keys;
    
    public Images getImages() {
        return images;
    }
    public String[] getChange_keys() {
        return change_keys;
    }
    public void setChange_keys(String[] change_keys) {
        this.change_keys = change_keys;
    }
    public void setImages(Images images) {
        this.images = images;
    }
}
