package wcci.habitrack.habitrack.repo;

import org.springframework.data.repository.CrudRepository;
import wcci.habitrack.habitrack.model.Habit;

public interface HabitRepository extends CrudRepository<Habit, Long> {
}
