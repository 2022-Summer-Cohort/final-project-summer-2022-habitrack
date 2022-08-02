package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
