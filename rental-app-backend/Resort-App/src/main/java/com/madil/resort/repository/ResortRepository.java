package com.madil.resort.repository;

import com.madil.resort.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.madil.resort.model.ResortModel;

import java.util.List;
import java.util.Optional;


@Repository
public interface ResortRepository extends MongoRepository<ResortModel, String> {

    Optional<ResortModel> findById(String resortId);
}
