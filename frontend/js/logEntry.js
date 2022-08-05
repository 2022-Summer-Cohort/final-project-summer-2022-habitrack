export default function logEntry(){
    return `
    <div class="log-container">
        
      <div class="log-form">
        <h1>Habit Name</h1>
        <input
          type="date"
          name="date"
          id="log-date"
          value=""
          min="2000-01-01"
          max="2025-01-01"
        />
        <input type="time" name="time" id="log-time" value="00:00" />
        <div class="yes-checkbox">
          <label for="log-completed-yes">Yes</label>
          <input
            type="checkbox"
            name="completed"
            value="yes"
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
              <select>
                <option value=""></option>
                <option value="">😁</option>
                <option value="">😐</option>
                <option value="">😖</option>
                <option value="">😓</option>
                <option value="">😕</option>
              </select>
            </ul>
        </div>
        <div class="log-notes">
            <textarea name="logNotes" id="note" cols="30" rows="10" placeholder="add note"></textarea>
            <br>
            <br>
            <button class="button-40" type="submit">Save</button>
        </div>

      </div>
    </div>
    
    `
}