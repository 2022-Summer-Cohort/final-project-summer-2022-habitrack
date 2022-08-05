package wcci.habitrack.habitrack;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import wcci.habitrack.habitrack.model.Account;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.model.Log;
import wcci.habitrack.habitrack.repo.AccountRepository;
import wcci.habitrack.habitrack.repo.HabitRepository;
import wcci.habitrack.habitrack.repo.LogRepository;

@Component
public class Populator implements CommandLineRunner {
    private HabitRepository habitRepo;
    private LogRepository logRepo;
    private AccountRepository accountRepo;

    public Populator(HabitRepository habitRepo, LogRepository logRepo, AccountRepository accountRepo) {
        this.habitRepo = habitRepo;
        this.logRepo = logRepo;
        this.accountRepo = accountRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        // Water
        Log waterLog1 = new Log(true, "", "", "", "", 2.0, 5);
        Log waterLog2 = new Log(true, "", "", "", "", 4.0, 5);
        Log waterLog3 = new Log(true, "", "", "", "", 9.0, 5);

        // Fruit
        Log fruitLog1 = new Log(true, "", "", "", "", 2.0, 5);
        Log fruitLog2 = new Log(true, "", "", "", "", 2.0, 5);

        // Smoked
        Log smokeLog1 = new Log(true, "", "", "", "", 1.0, 3);

        Habit drinkWater = new Habit("Drink Water", "Build", "Daily", "004D91", "", 20, waterLog1, waterLog2, waterLog3);
        Habit quitSmoking = new Habit("Quit Smoking", "Break", "Weekly", "910000", "", 5, smokeLog1);
        Habit eatFruit = new Habit("Eat Fruits", "Build", "Daily", "FFAE00", "", 4, fruitLog1, fruitLog2);

        habitRepo.save(drinkWater);
        habitRepo.save(quitSmoking);
        habitRepo.save(eatFruit);

        Account admin = new Account("Admin", "Password", drinkWater, quitSmoking, eatFruit);
        accountRepo.save(admin);

        logRepo.save(waterLog1);
        logRepo.save(waterLog2);
        logRepo.save(waterLog3);
        logRepo.save(fruitLog1);
        logRepo.save(fruitLog2);
        logRepo.save(smokeLog1);
    }

}
