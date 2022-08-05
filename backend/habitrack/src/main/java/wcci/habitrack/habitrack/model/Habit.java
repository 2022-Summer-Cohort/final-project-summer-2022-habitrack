package wcci.habitrack.habitrack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
public class Habit {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String type; // Build or Break
    private String goalPeriod; // Daily, Weekly, Monthly, Yearly
    private String color;
    private String icon;
    private double goal;

    private double percentage; // How close are you to completing that goal

    @ManyToOne @JsonIgnore
    private Account account; // Which account the habit is linked to
    @OneToMany(mappedBy = "habit", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Log> logs;

    public Habit(String name, String type, String goalPeriod, String color, String icon, double goal, Log... logs) {
        this.name = name;
        this.type = type;
        this.goalPeriod = goalPeriod;
        this.color = color;
        this.icon = icon;
        this.goal = goal;
        this.logs = Set.of(logs);

        this.percentage = updatePercentage();
    }
    public Habit() {}

    public double updatePercentage() {
        double temp = 0.0;
        for (Log log : logs) {
            temp += log.getAmount();
        }
        return (temp/goal) * 100.0;
    }

    public void createNewLog(Log newLog) {
        logs.add(newLog);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setGoalPeriod(String goalPeriod) {
        this.goalPeriod = goalPeriod;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setGoal(double goal) {
        this.goal = goal;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getGoalPeriod() {
        return goalPeriod;
    }

    public String getColor() {
        return color;
    }

    public String getIcon() {
        return icon;
    }

    public double getGoal() {
        return goal;
    }

    public double getPercentage() {
        return percentage;
    }

    public Account getAccount() {
        return account;
    }

    public Collection<Log> getLogs() {
        return logs;
    }
}
