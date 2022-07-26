package com.MedicalDonation.model;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@DynamicUpdate
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)// indicates that the persisitance provider must assign primary keys
    private Long id;
    private String usertype;
    private String username;
    private String password;
    private String email;
    @Column(columnDefinition = "TEXT")
    private String address;
    private Long phnum;

}
