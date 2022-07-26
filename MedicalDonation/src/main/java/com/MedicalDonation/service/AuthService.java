package com.MedicalDonation.service;


import com.MedicalDonation.dto.AuthRequest;
import com.MedicalDonation.dto.AuthResponse;
import com.MedicalDonation.model.Blog;
import com.MedicalDonation.model.Post;
import com.MedicalDonation.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class AuthService {
    @Autowired
    public AuthRepository authRepository;

    public void register(AuthRequest authRequest) {
        Blog blog = new Blog();
        blog.setId(authRequest.getId());
        blog.setUsertype(authRequest.getUsertype());
        blog.setUsername(authRequest.getUsername());
        blog.setPassword(authRequest.getPassword());
        blog.setEmail(authRequest.getEmail());
        blog.setAddress(authRequest.getAddress());
        blog.setPhnum(authRequest.getPhnum());
        authRepository.save(blog);
    }
    public void addNgo(AuthRequest authRequest) {
        Blog blog = new Blog();
        blog.setId(authRequest.getId());
        blog.setUsertype("ngo");
        blog.setUsername(authRequest.getUsername());
        blog.setPassword(authRequest.getPassword());
        blog.setEmail(authRequest.getEmail());
        blog.setAddress(authRequest.getAddress());
        blog.setPhnum(authRequest.getPhnum());
        authRepository.save(blog);
    }

    public AuthResponse login(AuthRequest authRequest) {
        Blog user = authRepository.findByUsername(authRequest.getUsername()).get();
        return new AuthResponse(user.getId(),user.getUsername(),user.getPassword(),user.getUsertype());

    }
    public Blog getBlogById(Long id){
        return authRepository.findById(id).get();
    }
    public List<Blog> getAll(){
        return authRepository.findAll();
    }
    public Blog getBlog(String username){
        return authRepository.findByUsername(username).get();
    }
    public void update(AuthRequest authRequest) {
        Blog blog = new Blog();
        blog.setId(authRequest.getId());
        if(authRequest.getUsertype()!=null)
        blog.setUsertype(authRequest.getUsertype());
        if(authRequest.getUsername()!=null)
        blog.setUsername(authRequest.getUsername());
        if(authRequest.getPassword()!=null)
        blog.setPassword(authRequest.getPassword());
        if(authRequest.getEmail()!=null)
        blog.setEmail(authRequest.getEmail());
        if(authRequest.getAddress()!=null)
        blog.setAddress(authRequest.getAddress());
        if(authRequest.getPhnum()!=null)
        blog.setPhnum(authRequest.getPhnum());
        authRepository.save(blog);
    }
    public void updatePassword(Long id, String password) {
        Blog blog = authRepository.findById(id).get();
        blog.setPassword(password);
        authRepository.save(blog);
    }
}
