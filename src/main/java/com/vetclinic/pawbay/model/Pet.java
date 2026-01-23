package com.vetclinic.pawbay.model;

public class Pet {

    private String id;
    private String petName;
    private String ownerName;
    private String disease;
    private int age;
    private String petType;
    private String appointmentDate;
    private String appointmentTime;
    public Pet next;
    public Pet() {}

    public Pet(String id, String petName, String ownerName, String disease,
               int age, String petType, String appointmentDate, String appointmentTime) {

        this.id = id;
        this.petName = petName;
        this.ownerName = ownerName;
        this.disease = disease;
        this.age = age;
        this.petType = petType;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPetName() { return petName; }
    public void setPetName(String petName) { this.petName = petName; }

    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }

    public String getDisease() { return disease; }
    public void setDisease(String disease) { this.disease = disease; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getPetType() { return petType; }
    public void setPetType(String petType) { this.petType = petType; }

    public String getAppointmentDate() { return appointmentDate; }
    public void setAppointmentDate(String appointmentDate) { this.appointmentDate = appointmentDate; }

    public String getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(String appointmentTime) { this.appointmentTime = appointmentTime; }
}
