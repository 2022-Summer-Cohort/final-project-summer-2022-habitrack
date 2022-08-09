package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.*;
import wcci.habitrack.habitrack.model.Account;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.repo.AccountRepository;
import wcci.habitrack.habitrack.repo.HabitRepository;

@RestController
public class AccountController {
    private AccountRepository accountRepo;
    private HabitRepository habitRepo;

    public AccountController(AccountRepository accountRepo, HabitRepository habitRepo) {
        this.accountRepo = accountRepo;
        this.habitRepo = habitRepo;
    }

    @GetMapping("/api/accounts")
    public Iterable<Account> getAllAccounts() {
        return accountRepo.findAll();
    }
    
    @PostMapping("/api/accounts/newAccount")
    public Account createNewAccount(@RequestBody Account accountToAdd) {
        accountRepo.save(accountToAdd);
        return accountToAdd;
    }

    @GetMapping("/api/{username}/habits")
    public Iterable<Habit> getUserHabits(@PathVariable String username){
        Account tempAccount = accountRepo.findByUsernameIgnoreCase(username).get();
        return tempAccount.getHabits();
    }

    @PostMapping("/api/{username}/newHabit")
    public Iterable<Habit> addHabit(@PathVariable String username, @RequestBody Habit habit) {
        Account tempAccount = accountRepo.findByUsernameIgnoreCase(username).get();
        habit.addAccount(tempAccount);
        habitRepo.save(habit);
        return accountRepo.findByUsernameIgnoreCase(username).get().getHabits();
    }
}
