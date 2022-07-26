package com.MedicalDonation.dto;

import com.MedicalDonation.model.Blog;
import com.MedicalDonation.model.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DonationRequest {
    private Long id;
    private Date dod;
    private boolean ifDonation;
    private boolean isCollected;
    private Long med_id;
    private Long user_id;
    private Long ngo_id;
    private Long exec_id;
}
