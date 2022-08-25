package wcci.habitrack.habitrack.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Log {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne @JsonIgnore
    private Habit habit;

    private boolean didHabit;
    @Lob
    private String note;

    private String time;
    private String date;

    private int rating;

    public Log(boolean didHabit, String note, String time, String date, int rating, Habit habit) {
        this.didHabit = didHabit;
        this.note = note;
        this.time = time;
        this.date = date;
        this.rating = rating;
        this.habit = habit;
    }

    public Log() {}

    public Long getId() {
        return id;
    }

    public boolean isDidHabit() {
        return didHabit;
    }

    public String getNote() {
        return note;
    }



    public String getTime() {
        return time;
    }

    public String getDate() {
        return date;
    }



    public int getRating() {
        return rating;
    }
    public int getCount(){
       return habit.logCount();
    }
    public Habit getHabit() {
        return habit;
    }
}
