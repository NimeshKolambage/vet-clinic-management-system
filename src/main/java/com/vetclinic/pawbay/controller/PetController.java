package com.vetclinic.pawbay.controller;

import com.vetclinic.pawbay.model.Pet;
import com.vetclinic.pawbay.service.PetService;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping("/pets")
@CrossOrigin
public class PetController {

    private final PetService service;

    public PetController(PetService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public String add(@RequestBody Pet pet) {
        service.addPet(pet);
        return "Pet Added";
    }

    @GetMapping("/all")
    public LinkedList<Pet> all() {
        return service.getAllPets();
    }

    @GetMapping("/search/{id}")
    public Pet search(@PathVariable String id) {
        return service.searchPet(id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable String id) {
        return service.deletePet(id) ? "Deleted" : "Not Found";
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable String id, @RequestBody Pet pet) {
        return service.updatePet(id, pet) ? "Updated" : "Not Found";
    }
}
