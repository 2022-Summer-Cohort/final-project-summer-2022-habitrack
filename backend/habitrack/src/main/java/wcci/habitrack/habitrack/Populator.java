package wcci.habitrack.habitrack;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.model.Account;
import wcci.habitrack.habitrack.model.Log;
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
        Habit firstHabit = new Habit("Drink water", account1, false, "Build","#FFA07A", "", "Wellness", 8, "day");
        habitRepo.save(firstHabit);
        Habit secondHabit = new Habit("Wake up early", account1, false, "Build", "#D1C2F0","", "Behavior",5, "week");
        habitRepo.save(secondHabit);
        Habit fifthHabit = new Habit("Exercise", account1, false, "Build", "#4682B4","", "Behavior",3, "week");
        habitRepo.save(fifthHabit);
        Account account2 = new Account("TestUser", "password");
        accountRepo.save((account2));
        Habit thirdHabit = new Habit("Go to Bed Early", account2, false,"build","#FFA07A","","Behavior",5,"week");
        habitRepo.save(thirdHabit);
        Habit fourthHabit = new Habit("exercise",account2,false,"build","#D1C2F0","","wellness",3,"week");
        habitRepo.save(fourthHabit);

        Log firstLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(firstLog);
        Log zLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(zLog);
        Log yLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(yLog);
        Log xLog = new Log(true, "Test", "time", "date", 3, firstHabit);
        logRepo.save(xLog);
        Log wLog = new Log(true, "Test", "time", "date", 4, firstHabit);
        logRepo.save(wLog);
        Log uLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(uLog);
        Log vLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(vLog);
        Log tLog = new Log(true, "Test", "time", "date", 1, firstHabit);
        logRepo.save(tLog);
        Log sLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(sLog);
        Log rLog = new Log(true, "Test", "time", "date", 3, firstHabit);
        logRepo.save(rLog);
        Log qLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(qLog);
        Log pLog = new Log(true, "Test", "time", "date", 4, firstHabit);
        logRepo.save(pLog);
        Log oLog = new Log(true, "Test", "time", "date", 1, firstHabit);
        logRepo.save(oLog);
        Log nLog = new Log(true, "Test", "time", "date", 2, firstHabit);
        logRepo.save(nLog);
        Log mLog = new Log(true, "Test", "time", "date", 5, firstHabit);
        logRepo.save(mLog);
        Log lLog = new Log(true, "Test", "time", "date", 3, firstHabit);
        logRepo.save(lLog);


        Log secondLog = new Log(true, "Test", "time", "date", 1, firstHabit);
        logRepo.save(secondLog);
        Log thirdLog = new Log(true, "Test", "time", "date", 3, firstHabit);
        logRepo.save(thirdLog);
        Log fourthLog = new Log(true, "Test", "time", "date", 3, firstHabit);
        logRepo.save(fourthLog);
        Log fifthLog = new Log(true, "Test", "time", "date", 2, firstHabit);
        logRepo.save(fifthLog);
        Log sixthLog = new Log(true, "Test", "time", "date", 4, firstHabit);
        logRepo.save(sixthLog);
        Log seventhLog = new Log(true, "Test", "time", "date", 3, secondHabit);
        logRepo.save(seventhLog);
        Log eighthLog = new Log(true, "Test", "time", "date", 5, secondHabit);
        logRepo.save(eighthLog);
        Log ninthLog = new Log(true, "Test", "time", "date", 2, secondHabit);
        logRepo.save(ninthLog);
        Log tenthLog = new Log(true, "Test", "time", "date", 1, fifthHabit);
        logRepo.save(tenthLog);
        Log elevenLog = new Log(true, "Test", "time", "date", 4, fifthHabit);
        logRepo.save(elevenLog);
        Log twelveLog = new Log(true, "Test", "time", "date", 3, fifthHabit);
        logRepo.save(twelveLog);
        Log thirteenLog = new Log(true, "Test", "time", "date", 2, fifthHabit);
        logRepo.save(thirteenLog);
        Log aLog = new Log(true, "Test", "time", "date", 2, fifthHabit);
        logRepo.save(aLog);
        Log bLog = new Log(true, "Test", "time", "date", 1, fifthHabit);
        logRepo.save(bLog);
        Log cLog = new Log(true, "Test", "time", "date", 2, fifthHabit);
        logRepo.save(cLog);
        Log dLog = new Log(true, "Test", "time", "date", 5, fifthHabit);
        logRepo.save(dLog);
        Log eLog = new Log(true, "Test", "time", "date", 5, fifthHabit);
        logRepo.save(eLog);
        Log fLog = new Log(true, "Test", "time", "date", 5, fifthHabit);
        logRepo.save(fLog);
        Log gLog = new Log(true, "Test", "time", "date", 3, fifthHabit);
        logRepo.save(gLog);
        Log hLog = new Log(true, "Test", "time", "date", 1, fifthHabit);
        logRepo.save(hLog);
        Log jLog = new Log(true, "Test", "time", "date", 4, fifthHabit);
        logRepo.save(jLog);

    }

}
