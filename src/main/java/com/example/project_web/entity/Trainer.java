package com.example.project_web.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    private String phone;

    @Column(length = 10,nullable = false)
    @Temporal(value = TemporalType.DATE)
    private Date dob;

    @Column
    private String description;

    @Column
    private String fb_link;

    @Column
    private String tw_link;

    @Column
    private String ins_link;

    @OneToMany(mappedBy = "trainer", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Course> courses = new HashSet<>();;

}
