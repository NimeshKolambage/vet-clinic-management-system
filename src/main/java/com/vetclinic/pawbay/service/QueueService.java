package com.vetclinic.pawbay.service;
import com.vetclinic.pawbay.model.Pet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service

public class QueueService {
    private Pet head = null;
    private Pet tail = null;


    public void enqueue(Pet newPet) {
        newPet.next = null;
        if (head == null) {
            head = tail = newPet;
        } else {
            tail.next = newPet;
            tail = newPet;
        }
    }

    public void addEmergency(Pet pet) {
        if (head == null) {
            head = tail = pet;
        } else {
            pet.next = head;
            head = pet;
        }
    }

    public Pet dequeue() {
        if (head == null) return null;
        Pet temp = head;
        head = head.next;
        if (head == null) tail = null;
        return temp;
    }

    public List<Pet> getAllInQueue() {
        List<Pet> list = new ArrayList<>();
        Pet current = head;
        while (current != null) {
            list.add(current);
            current = current.next;
        }
        return list;
    }
}
