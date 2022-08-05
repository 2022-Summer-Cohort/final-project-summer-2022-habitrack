package wcci.habitrack.habitrack.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Set;

@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String password;

    @OneToMany(mappedBy = "account")
    private Collection<Habit> habits;

    public Account(String username, String password, Habit... habits) {
        this.username = username;
        this.password = password;
        this.habits = Set.of(habits);
    }

    public Account() {}

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Habit> getHabits() {
        return habits;
    }

    public void createNewHabit(Habit newHabit) {
        habits.add(newHabit);
    }

}
