package wcci.habitrack.habitrack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Habit {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private boolean completed;
    private String buildOrBreak;
    private String habitIcon;
    private String category;
    private String frequency;

    @ManyToOne @JsonIgnore
    private Account account;

    @OneToMany(mappedBy = "habit", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Log> logs;
    @ElementCollection
    private Collection<String> notes;

    public Habit(String name, boolean completed, String buildOrBreak, String habitIcon, String category, String frequency, Log... logs) {
        this.name = name;
        this.completed = completed;
        this.buildOrBreak = buildOrBreak;
        this.habitIcon = habitIcon;
        this.category = category;
        // Wellness
        // Time management
        // Behavior
        this.frequency = frequency;
        this.logs = Arrays.asList(logs);
    }

    public Habit() {}

    public void setUser(Account account) {
        this.account = account;
    }

    public Long getId() {
        return id;
    }

    public String getFrequency() {
        return frequency;
    }

    public String getName() {
        return name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public String getBuildOrBreak() {
        return buildOrBreak;
    }

    public String getHabitIcon() {
        return habitIcon;
    }

    public String getCategory() {
        return category;
    }

    public Collection<Log> getLogs() {
        return logs;
    }

    public Collection<String> getNotes() {
        return notes;
    }

    public void addLog(Log log) {
        logs.add(log);
    }

    public void addNote(String note) {
        notes.add(note);
    }

    public void changeName(String newName) {
        name = newName;
    }

    public void changeFrequency(String newFrequency) {
        frequency = newFrequency;
    }

    public void changeCategory(String newCategory) {
        category = newCategory;
    }
}
