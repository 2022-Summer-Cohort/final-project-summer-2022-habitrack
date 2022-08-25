package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.Log;

public interface LogRepository extends CrudRepository<Log, Long> {
}
