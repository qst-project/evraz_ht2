package org.qst.evrazht2backend.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public Number sinMachineNumber;
    public Number exhausterNumber;
    public Number bearingNumber;
    public String fieldName;
    public String type;
    public String moment;
    public double max;
    public double min;
    public double value;

}
