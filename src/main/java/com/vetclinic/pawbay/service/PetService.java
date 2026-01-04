package com.vetclinic.pawbay.service;

import com.vetclinic.pawbay.model.Pet;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class PetService {

    private LinkedList<Pet> pets = new LinkedList<>();

    // ADD
    public void addPet(Pet pet) {
        pets.add(pet);
    }

    // VIEW ALL
    public LinkedList<Pet> getAllPets() {
        return pets;
    }

    // SEARCH
    public Pet searchPet(String id) {
        for (Pet p : pets) {
            if (p.getId().equals(id)) {
                return p;
            }
        }
        return null;
    }

    // DELETE
    public boolean deletePet(String id) {
        return pets.removeIf(p -> p.getId().equals(id));
    }

    // UPDATE
    public boolean updatePet(String id, Pet newPet) {
        for (Pet p : pets) {
            if (p.getId().equals(id)) {
                p.setPetName(newPet.getPetName());
                p.setOwnerName(newPet.getOwnerName());
                p.setDisease(newPet.getDisease());
                p.setAge(newPet.getAge());
                return true;
            }
        }
        return false;
    }
}
