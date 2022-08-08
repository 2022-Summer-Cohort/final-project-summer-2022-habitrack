package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.*;
import wcci.habitrack.habitrack.model.Account;
import wcci.habitrack.habitrack.model.Habit;
import wcci.habitrack.habitrack.repo.AccountRepository;

@RestController
public class AccountController {
    private AccountRepository accountRepo;

    public AccountController(AccountRepository accountRepo) {
        this.accountRepo = accountRepo;
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
}
