package com.capgemini.itransform.courseservice.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.itransform.courseservice.entity.Course;

@Repository
public interface CourseDao extends MongoRepository<Course, Integer> {

}
