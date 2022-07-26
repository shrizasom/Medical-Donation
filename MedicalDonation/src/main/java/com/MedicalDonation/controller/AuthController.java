package com.MedicalDonation.controller;

import com.MedicalDonation.dto.AuthRequest;
import com.MedicalDonation.dto.AuthResponse;
import com.MedicalDonation.model.Blog;
import com.MedicalDonation.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    public AuthService authService;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody AuthRequest authRequest){
        authService.register(authRequest);
        return new ResponseEntity(HttpStatus.OK);

    }
    @PostMapping("/addngo")
    public ResponseEntity addngo(@RequestBody AuthRequest authRequest){
        authService.addNgo(authRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest){
        AuthResponse authResponse= (AuthResponse) authService.login(authRequest);
        return new ResponseEntity(authResponse,HttpStatus.OK);
    }
    @GetMapping("/getid/{id}")
    public ResponseEntity<Blog> getById(@PathVariable(value="id") Long id){
        return new ResponseEntity(authService.getBlogById(id),HttpStatus.OK);
    }
    @GetMapping("/getname/{username}")
    public ResponseEntity<Blog> getByName(@PathVariable String username){
        return new ResponseEntity(authService.getBlog(username),HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Blog>> getAll(){
        return new ResponseEntity(authService.getAll(),HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity update(@RequestBody AuthRequest authRequest){
        authService.update(authRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/password/{id}/{pass}")
    public ResponseEntity updatePassword(@PathVariable Long id, @PathVariable String pass){
        authService.updatePassword(id,pass);
        return new ResponseEntity(HttpStatus.OK);
    }
}
