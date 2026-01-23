package com.vetclinic.pawbay.controller;

import com.vetclinic.pawbay.model.Pet;
import com.vetclinic.pawbay.service.PetService;
import com.vetclinic.pawbay.service.QueueService;
import org.springframework.stereotype.Controller; // redirect වැඩ කරන්න @Controller ඕනේ
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/pets")
public class PetController {

    // 1. පාවිච්චි කරන Services මෙතන Declare කරන්න
    private final PetService petService;
    private final QueueService queueService;

    // 2. Constructor එක හරහා මේවා Inject කරන්න
    public PetController(PetService petService, QueueService queueService) {
        this.petService = petService;
        this.queueService = queueService;
    }

    // --- පෝලිම පෙන්වන Dashboard එක (Console) ---
    @GetMapping("/console")
    public String showConsole(Model model) {
        List<Pet> queueList = queueService.getAllInQueue();
        model.addAttribute("queueList", queueList);

        // පෝලිමේ මුල ඉන්න කෙනා
        Pet current = queueList.isEmpty() ? null : queueList.get(0);
        model.addAttribute("currentPet", current);

        return "console"; // console.html load වේ
    }

    // --- සතෙක් ඇතුළත් කිරීමේ logic එක ---
    @PostMapping("/register-pet")
    public String registerPet(@ModelAttribute Pet pet) {
        // 1. Firebase/DB එකට save කිරීම (petService හරහා)
        petService.addPet(pet);

        // 2. Queue එකට (Linked List) එකතු කිරීම
        if ("Emergency".equalsIgnoreCase(pet.getDisease())) {
            queueService.addEmergency(pet);
        } else {
            queueService.enqueue(pet);
        }

        return "redirect:/pets/console";
    }

    // --- Treatment එක අවසන් කිරීම ---
    @PostMapping("/complete-treatment")
    public String completeTreatment() {
        Pet completedPet = queueService.dequeue();

        if (completedPet != null) {
            // අවශ්‍ය නම් මෙතනදී status එක update කරන්න පුළුවන්
            // petService.updateStatus(completedPet.getId(), "Completed");
        }

        return "redirect:/pets/console";
    }

    // --- පරණ API එක (JSON response එකක් ඕනේ නම් මේ @ResponseBody දාන්න) ---
    @GetMapping("/all")
    @ResponseBody
    public List<Pet> all() {
        return queueService.getAllInQueue();
    }
}