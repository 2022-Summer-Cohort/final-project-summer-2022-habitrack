package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.*;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.model.Log;
import wcci.habitrack.habitrack.repo.HabitRepository;
import wcci.habitrack.habitrack.repo.LogRepository;

@RestController
public class HabitController {
    private HabitRepository habitRepo;
    private LogRepository logRepo;

    public HabitController(HabitRepository habitRepo, LogRepository logRepo) {
        this.habitRepo = habitRepo;
        this.logRepo = logRepo;
    }

    @GetMapping("/api/habits")
    public Iterable<Habit> getAllHabits() {
        return habitRepo.findAll();
    }

    @GetMapping("/api/habits/{id}")
    public Habit getHabitById(@PathVariable Long id) {
        return habitRepo.findById(id).get();
    }

    @PostMapping("/api/habits/newHabit")
    public Iterable<Habit> addHabit(@RequestBody Habit newHabit) {
        habitRepo.save(newHabit);
        return habitRepo.findAll();
    }

    @DeleteMapping("/api/habits/{id}/removeHabit")
    public Iterable<Habit> removeHabit(@PathVariable Long id) {
        habitRepo.deleteById(id);
        return habitRepo.findAll();
    }

    @PatchMapping("/api/habits/{id}/editName")
    public Habit editHabitName(@PathVariable Long id, @RequestBody String newName) {
        Habit temp = habitRepo.findById(id).get();
        temp.changeName(newName);
        habitRepo.save(temp);
        return temp;
    }

    @PatchMapping("/api/habits/{id}/editFrequency")
    public Habit editHabitFrequency(@PathVariable Long id, @RequestBody String newFrequency) {
        Habit temp = habitRepo.findById(id).get();
        temp.changeFrequency(newFrequency);
        habitRepo.save(temp);
        return temp;
    }

    @PatchMapping("/api/habits/{id}/editCategory")
    public Habit editHabitCategory(@PathVariable Long id, @RequestBody String newCategory) {
        Habit temp = habitRepo.findById(id).get();
        temp.changeCategory(newCategory);
        habitRepo.save(temp);
        return temp;
    }

    @PostMapping("/api/habits/{id}/newNote")
    public Habit addHabitNote(@PathVariable Long id, @RequestBody String newNote) {
        Habit temp = habitRepo.findById(id).get();
        temp.addNote(newNote);
        habitRepo.save(temp);
        return temp;
    }

    @PostMapping("/api/habits/{id}/newLog")
    public Habit addHabitLog(@PathVariable Long id, @RequestBody Log log) {
        Habit temp = habitRepo.findById(id).get();
        temp.addLog(log);
        logRepo.save(log);
        habitRepo.save(temp);
        return temp;
    }


}
