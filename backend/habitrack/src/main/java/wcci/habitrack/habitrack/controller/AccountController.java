package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import wcci.habitrack.habitrack.model.Account;
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
    public Account createNewAccount(@RequestBody Account newAccount) {
        accountRepo.save(newAccount);
        return newAccount;
    }
}
