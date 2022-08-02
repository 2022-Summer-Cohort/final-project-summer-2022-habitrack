package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.Account;

public interface UserRepository extends CrudRepository<Account, Long> {
}
