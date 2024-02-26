package com.study.webb.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@Entity
public class BoardEntity {

    @Id @GeneratedValue
    private Long boardNum;

    private String userName;
    private String pw;

    private String Sector;
    private String title;
    private String comment;
    private Long likeCount;
    private LocalDateTime writeDate;
}
