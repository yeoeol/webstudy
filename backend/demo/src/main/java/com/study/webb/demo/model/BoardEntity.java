package com.study.webb.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter @Setter
@ToString
@EntityListeners(AuditingEntityListener.class)
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

    @CreatedDate
    private LocalDateTime writeDate;
}
