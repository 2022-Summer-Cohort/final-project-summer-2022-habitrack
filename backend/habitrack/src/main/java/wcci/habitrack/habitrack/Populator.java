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



        Account account1 = new Account("Administrator", "Password");
        accountRepo.save(account1);
        Habit firstHabit = new Habit("Drink water", account1, false, "Build","#FFA07A", "", "Wellness", "");
        habitRepo.save(firstHabit);
        Habit secondHabit = new Habit("Wake up early", account1, false, "Build", "#D1C2F0","", "Behavior", "");
        habitRepo.save(secondHabit);

        Account account2 = new Account("TestUser", "password");
        accountRepo.save((account2));
        Habit thirdHabit = new Habit("Go to Bed Early", account2, false,"build","#FFA07A","","Behavior","");
        habitRepo.save(thirdHabit);
        Habit fourthHabit = new Habit("exercise",account2,false,"build","#FFA07A","","wellness","");
        habitRepo.save(fourthHabit);





    }

}
