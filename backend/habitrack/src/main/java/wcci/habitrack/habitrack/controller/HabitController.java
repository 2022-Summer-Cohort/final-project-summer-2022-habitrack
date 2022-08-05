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
        if (habitRepo.findById(id).isPresent()) {
            return habitRepo.findById(id).get();
        }
        return null;
    }

    @GetMapping("/api/habits/{id}/logs")
    public Iterable<Log> getHabitLogs(@PathVariable Long id) {
        if (habitRepo.findById(id).isPresent()) {
            return habitRepo.findById(id).get().getLogs();
        }
        return null;
    }

    @PostMapping("/api/habits/addHabit")
    public Iterable<Habit> addNewHabit(@RequestBody Habit newHabit) {
        habitRepo.save(newHabit);
        return habitRepo.findAll();
    }

    @PostMapping("/api/habits/{id}/newLog")
    public Habit createNewHabitLog(@PathVariable Long id, @RequestBody Log newLog) {
        if (habitRepo.findById(id).isPresent()) {
            Habit habit = habitRepo.findById(id).get();
            newLog.setHabit(habit);
            logRepo.save(newLog);

            return habit;
        }
        return null;
    }







}
