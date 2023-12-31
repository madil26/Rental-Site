package com.madil.resort;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class ResortAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResortAppApplication.class, args);
	}

}
