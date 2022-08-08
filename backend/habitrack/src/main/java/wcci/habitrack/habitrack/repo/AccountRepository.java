package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.Account;

import java.util.Map;
import java.util.Optional;

public interface AccountRepository extends CrudRepository<Account, Long> {
    Optional<Account> findByUsernameIgnoreCase(String username);
}
