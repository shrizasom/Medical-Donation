package com.MedicalDonation.service;

import com.MedicalDonation.dto.DonationRequest;
import com.MedicalDonation.model.Donation;
import com.MedicalDonation.model.Post;
import com.MedicalDonation.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service

public class DonationService {
    @Autowired
    public DonationRepository donationRepository;
    public void save(DonationRequest donationRequest){
        Donation donation= new Donation();
        donation.setId(donationRequest.getId());
        donation.setIfDonation(false);
        donation.setCollected(false);
        donation.setMed_id(donationRequest.getMed_id());
        donation.setUser_id(donationRequest.getUser_id());
        donation.setNgo_id(donationRequest.getNgo_id());
        donation.setExec_id(donationRequest.getExec_id());
        donationRepository.save(donation);
    }
    public void update(DonationRequest donationRequest){
        Donation donation= new Donation();
        donation.setId(donationRequest.getId());
        if(donationRequest.getMed_id()!=null)
        donation.setMed_id(donationRequest.getMed_id());
        if(donationRequest.getUser_id()!=null)
        donation.setUser_id(donationRequest.getUser_id());
        if(donationRequest.getNgo_id()!=null)
        donation.setNgo_id(donationRequest.getNgo_id());
        if(donationRequest.getExec_id()!=null)
        donation.setExec_id(donationRequest.getExec_id());
        donationRepository.save(donation);
    }
    public Donation getDonation(Long id){
        return donationRepository.findById(id).get();
    }
    public List<Donation> getAll(){
        return donationRepository.findAll();
    }
    public void checkDonation(Long id){
        Donation donation = donationRepository.findById(id).get();
        Date date = new Date();
        donation.setDod(date);
        donation.setIfDonation(true);
        donationRepository.save(donation);
    }
    public void collected(Long id){
        Donation donation = donationRepository.findById(id).get();
        donation.setCollected(true);
        donationRepository.save(donation);
    }
    public void assign(Long id, Long ngo_id,Long exec_id){
        Donation donation = donationRepository.findById(id).get();
        donation.setNgo_id(ngo_id);
        donation.setExec_id(exec_id);
        donationRepository.save(donation);
    }
    public void delete(Long id){
        donationRepository.deleteById(id);
    }

}
