package com.MedicalDonation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class PostRequest {
    private Long id;
    private String title;
    private String image;
    private String Mfd_Date;
    private String Exp_Date;
    private Integer quantity;
}
