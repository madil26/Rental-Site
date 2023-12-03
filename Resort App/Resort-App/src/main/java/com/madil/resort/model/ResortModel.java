package com.madil.resort.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "resorts")
public class ResortModel {

    private String resortId;
    @Field("resorts")
    private List<Resort> resorts;

    public ResortModel(String resortId,List<Resort> resorts ) {
        this.resortId = resortId;
        this.resorts = resorts;
    }

    public List<Resort> getMyResort() {
        return resorts;
    }

    public void setMyResort(List<Resort> resorts) {
        this.resorts = resorts;
    }


    public String getResortId() {
        return resortId;
    }
    public void setResortId(String resortId) {
        this.resortId = resortId;
    }

    public static class Resort {

        private String resort_id;
        private String resort_name;
        private String city;
        @Field("availability")
        private Availability availability;
        @Field("price_per_night")
        private int pricePerNight;
        @Field("max_capacity")
        private int maxCapacity;
        @Field("room_type")
        private String roomType;
        @Field("reviews")
        private Reviews reviews;
        private String image;

        public int getPricePerNight() {
            return pricePerNight;
        }
        public void setPricePerNight(int pricePerNight) {
            this.pricePerNight = pricePerNight;
        }
        public int getMaxCapacity() {
            return maxCapacity;
        }
        public void setMaxCapacity(int max_capacity) {
            this.maxCapacity = max_capacity;
        }
        public String getRoomType() {
            return roomType;
        }
        public void setRoomType(String roomType) {
            this.roomType = roomType;
        }
        public String getImage() {
            return image;
        }
        public void setImage(String image) {
            this.image = image;
        }
        public String getResort_id() {
            return resort_id;
        }
        public void setResort_id(String resort_id) {
            this.resort_id = resort_id;
        }
        public String getResort_name() {
            return resort_name;
        }
        public void setResort_name(String resort_name) {
            this.resort_name = resort_name;
        }
        public String getCity() {
            return city;
        }
        public void setCity(String city) {
            this.city = city;
        }
        public Availability getAvailability() {
            return availability;
        }
        public void setAvailability(Availability availability) {
            this.availability = availability;
        }
        public Reviews getReviews() {
            return reviews;
        }
        public void setReviews(Reviews reviews) {
            this.reviews = reviews;
        }



    }


    public static class Availability {
        @Field("checkin_dt")
        private Date checkin_dt;
        @Field("checkout_dt")
        private Date checkout_dt;

        public Date getCheckin_dt() {
            return checkin_dt;
        }
        public void setCheckin_dt(Date checkin_dt) {
            this.checkin_dt = checkin_dt;
        }
        public Date getCheckout_dt() {
            return checkout_dt;
        }
        public void setCheckout_dt(Date checkout_dt) {
            this.checkout_dt = checkout_dt;
        }
    }

    public static class Reviews {

        private double average_rating;
        private int num_reviews;

        public double getAverage_rating() {
            return average_rating;
        }
        public void setAverage_rating(double average_rating) {
            this.average_rating = average_rating;
        }
        public int getNum_reviews() {
            return num_reviews;
        }
        public void setNum_reviews(int num_reviews) {
            this.num_reviews = num_reviews;
        }
    }

}