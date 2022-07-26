package com.MedicalDonation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuthRequest {
    private Long id;
    private String usertype;
    private String username;
    private String password;
    private String email;
    private String address;
    private Long phnum;

}
