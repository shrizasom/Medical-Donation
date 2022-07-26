package com.MedicalDonation.service;


import com.MedicalDonation.dto.PostRequest;
import com.MedicalDonation.model.Post;
import com.MedicalDonation.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PostService {
    @Autowired
    public PostRepository postRepository;
    public void save(PostRequest postRequest){
        Post post=new Post();
        post.setId(postRequest.getId());
        post.setTitle(postRequest.getTitle());
        post.setImage(postRequest.getImage());
        post.setMfd_Date(postRequest.getMfd_Date());
        post.setExp_Date(postRequest.getExp_Date());
        post.setQuantity(postRequest.getQuantity());
        postRepository.save(post);

    }
    public Post getPost(Long id){
        return postRepository.findById(id).get();
    }
    public List<Post> getAllPost(){
        return postRepository.findAll();
    }
    public void delete(Long id){
        postRepository.deleteById(id);
    }
    public void update(PostRequest postRequest) {
        Post post = new Post();
        post.setId(postRequest.getId());
        if(postRequest.getTitle()!=null)
        post.setTitle(postRequest.getTitle());
        if(postRequest.getImage()!=null)
        post.setImage(postRequest.getImage());
        if(postRequest.getMfd_Date()!=null)
        post.setMfd_Date(postRequest.getMfd_Date());
        if(postRequest.getExp_Date()!=null)
        post.setExp_Date(postRequest.getExp_Date());
        if(postRequest.getQuantity()!=null)
        post.setQuantity(postRequest.getQuantity());
        postRepository.save(post);
    }
    public void updateQuantity(Long id, Integer quantity) {
        Post post = postRepository.findById(id).get();
        post.setQuantity(quantity);
        postRepository.save(post);
    }
}
