package wcci.habitrack.habitrack.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Habit> habits;

    public Account(String username, String password) {
        this.username = username;
        this.password = password;

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

    public void addHabit(Habit habit) {
        habits.add(habit);
    }

    public void removeHabit(Habit habit) {
        habits.remove(habit);
    }


}
