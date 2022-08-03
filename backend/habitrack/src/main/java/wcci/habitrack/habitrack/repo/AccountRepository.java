package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.Account;

public interface AccountRepository extends CrudRepository<Account, Long> {
}
