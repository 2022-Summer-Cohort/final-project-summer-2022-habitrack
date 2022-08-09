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

    private String timeStamp;
    private String date;

    private int rating;

    public Log(boolean didHabit, String note, String timeStamp, String date, int rating) {
        this.didHabit = didHabit;
        this.note = note;
        this.timeStamp = timeStamp;
        this.date = date;
        this.rating = rating;
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



    public String getTimeStamp() {
        return timeStamp;
    }

    public String getDate() {
        return date;
    }



    public int getRating() {
        return rating;
    }

    public Habit getHabit() {
        return habit;
    }
}
