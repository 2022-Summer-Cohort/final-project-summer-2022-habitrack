package wcci.habitrack.habitrack;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.model.Account;
import wcci.habitrack.habitrack.repo.HabitRepository;
import wcci.habitrack.habitrack.repo.LogRepository;
import wcci.habitrack.habitrack.repo.AccountRepository;

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

        Habit firstHabit = new Habit("Drink water", false, "Build", "", "Wellness", "");
//        firstHabit.setUser(user1);
        habitRepo.save(firstHabit);

        Habit secondHabit = new Habit("Wake up early", false, "Build", "", "Behavior", "");
//        secondHabit.setUser(user1);
        habitRepo.save(secondHabit);

        Account account1 = new Account("Admin", "Password", firstHabit, secondHabit);
        accountRepo.save(account1);

//        user1.addHabit(firstHabit);
//        user1.addHabit(secondHabit);
//        userRepo.save(user1);
    }

}
