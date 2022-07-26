package com.MedicalDonation.controller;

import com.MedicalDonation.dto.PostRequest;
import com.MedicalDonation.model.Post;
import com.MedicalDonation.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/post")

public class PostController {
    @Autowired
    public PostService postService;

    @PostMapping("/create")
    public ResponseEntity create(@RequestBody PostRequest postRequest){
        postService.save(postRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Post> get(@PathVariable long id){
        return new ResponseEntity(postService.getPost(id),HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Post>> getAll(){
        return new ResponseEntity(postService.getAllPost(),HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        postService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity update(@RequestBody PostRequest postRequest){
        postService.update(postRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/quantity/{id}/{q}")
    public ResponseEntity updateQuantity(@PathVariable Long id, @PathVariable Integer q){
        postService.updateQuantity(id,q);
        return new ResponseEntity(HttpStatus.OK);
    }
}
