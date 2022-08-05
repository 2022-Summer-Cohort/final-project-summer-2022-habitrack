package wcci.habitrack.habitrack.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/api/accounts/{id}")
    public Account getAccountById(@PathVariable Long id) {
        return accountRepo.findById(id).get();
    }
}
