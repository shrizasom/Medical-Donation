package com.MedicalDonation.controller;

import com.MedicalDonation.dto.DonationRequest;
import com.MedicalDonation.dto.PostRequest;
import com.MedicalDonation.model.Donation;
import com.MedicalDonation.model.Post;
import com.MedicalDonation.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/donation")

public class DonationController {
    @Autowired
    public DonationService donationService;
    @PostMapping("/buy")
    public ResponseEntity create(@RequestBody DonationRequest donationRequest){
        donationService.save(donationRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/assign/{id}/{ngo_id}/{exec_id}")
    public ResponseEntity assign(@PathVariable Long id,@PathVariable Long ngo_id ,@PathVariable Long exec_id){
        donationService.assign(id,ngo_id,exec_id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity update(@RequestBody DonationRequest donationRequest){
        donationService.update(donationRequest);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/checkDonation/{id}")
    public ResponseEntity updateDonationStatus(@PathVariable Long id){
        donationService.checkDonation(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PutMapping("/collected/{id}")
    public ResponseEntity updateCollectStatus(@PathVariable Long id){
        donationService.collected(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Donation> get(@PathVariable Long id){
        return new ResponseEntity(donationService.getDonation(id),HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Donation>> getAll(){
        return new ResponseEntity(donationService.getAll(),HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        donationService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
