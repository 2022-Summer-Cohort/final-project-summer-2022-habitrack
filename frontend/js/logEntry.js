export default function logEntry(habit){
    return `
    <div class="log-container">
        
      <div class="log-form">
        <div class="back-button">
          <p class="fa-solid fa-x">&#x2715;</p>
        </div>
        <h1>${habit.name}</h1>
        <input type="hidden" class="habit-color" name="background-color" value="${habit.color}">
        <input type="hidden" class="habit-id" value="${habit.id}">
        <input
          class="log-date"
          type="date"
          name="date"
          id="log-date"
          value=""
          min="2000-01-01"
          max="2025-01-01"
        />
        <input class="log-time" type="time" name="time" id="log-time" value="" />

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
        </div>

      </div>
    </div>
    
    `
}