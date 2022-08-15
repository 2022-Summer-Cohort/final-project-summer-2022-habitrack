package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.*;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.model.Log;
import wcci.habitrack.habitrack.repo.HabitRepository;
import wcci.habitrack.habitrack.repo.LogRepository;

@RestController
public class LogController {
    private HabitRepository habitRepo;
    private LogRepository logRepo;

    public LogController(HabitRepository habitRepo, LogRepository logRepo) {
        this.habitRepo = habitRepo;
        this.logRepo = logRepo;
    }

    @DeleteMapping("/api/logs/{id}/deleteLog")
    public Habit deleteHabitLog(@PathVariable Long id) {
        Habit temp = logRepo.findById(id).get().getHabit();
        logRepo.deleteById(id);
        return temp;
    }


}
