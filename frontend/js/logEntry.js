export default function logEntry(habit){
    return `
    <div class="log-container">
        
      <div class="log-form">
        <h1>${habit.name}</h1>
        <input type="hidden" class="habit-color" name="background-color" value="${habit.color}">
        <input type="hidden" class="habit-id" value="${habit.id}">
        <input
          class="log-date"
          type="date"
          name="date"
          id="log-date"
          value="2000-01-01"
          min="2000-01-01"
          max="2025-01-01"
        />
        <input class="log-time" type="time" name="time" id="log-time" value="00:00" />
        <div class="yes-checkbox">
          <label for="log-completed-yes">Yes</label>
          <input
            class="log-check-yes"
            type="checkbox"
            name="completed"
            value="false"
            id="log-completed-yes"
          />
          <label for="log-completed-no">No</label>
          <input
            type="checkbox"
            name="completed"
            value="no"
            id="log-completed-no"
          />
          
        </div>
        <div class="reflection">
            <ul>
                <span>I am feeling:</span>
              <select class="log-reflection">
                <option value="0"></option>
                <option value="1">😁</option>
                <option value="2">😐</option>
                <option value="3">😖</option>
                <option value="4">😓</option>
                <option value="5">😕</option>
              </select>
            </ul>
        </div>
        <div class="log-notes">
            <textarea name="logNotes" id="note" cols="30" rows="10" placeholder="add note"></textarea>
            <br>
            <br>
            <button class="button-40 save-button">Save</button>
            <br>
            <br>
            <h3 class="cancel-button">Cancel</h3>
        </div>

      </div>
    </div>
    
    `
}