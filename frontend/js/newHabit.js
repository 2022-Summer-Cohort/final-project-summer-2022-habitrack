export default function newHabit() {
  return `
    <div class="new-habit-container">
        <div class="habit-form">
        <div class="new-habit-name">
            <label for="habit-name">Habit Name:</label>
            <input type="text" name="Habit Name" id="habit-name">
        </div>
        <div class="build-or-break">
            <label for="habit-type">Type:</label>
            <select name="" id="habit-type">
                <option value="Build">Build</option>
                <option value="Break">Break</option>
            </select>
        </div>
        <div class="color">
            <label for="habit-color">Color:</label>
            <input type="color" value="#FFFFFF" name="habit-color" id="habit-color" list="presets">
            <datalist id="presets">
                <option value="#FFA07A"></option>
                <option value="#CD5C5C"></option>
                <option value="#FFB499"></option>
                <option value="#FFE866"></option>
                <option value="#ADD8E6"></option>
                <option value="#FFE4E1"></option>
                <option value="#8FBC8F"></option>
                <option value="#4682B4"></option>
                <option value="#5F9EA0"></option>
                <option value="#D1C2F0"></option>
            </datalist>
        </div> 
        <div class="icon">
            <label for="habit-icon">Icon:</label>
            <select name="icon" id="habit-icon">
                <option value="&#9200">&#9200;</option>
                <option value="&#9940">&#9940;</option>
                <option value="&#129367">&#129367;</option>
                <option value="&#129382">&#129382;</option>
                <option value="&#127827">&#127827;</option>
                <option value="&#127866">&#127866;</option>
                <option value="&#127869">&#127869;</option>
                <option value="&#127912">&#127912;</option>
                <option value="&#127926">&#127926;</option>
                <option value="&#127939">&#127939;</option>
                <option value="&#127947">&#127947;</option>
                <option value="&#128095">&#128095;</option>
                <option value="&#128181">&#128181;</option>
                <option value="&#128218">&#128218;</option>
                <option value="&#128241">&#128241;</option>
                <option value="&#128250">&#128250;</option>
                <option value="&#128684">&#128684;</option>
                <option value="&#128690">&#128690;</option>
                <option value="&#128719">&#128719;</option>

            </select>
            </div>
            <div class="goal">
                <label for="goal">Set your goal:</label>
                <select name="" id="numOfTimes">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                </select><p>/</p>
                <select name="" value="" id="per">
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                </select>
            </div>
            <button class="new-habit-save-button button-40">Save</button>
         
            <h3 class="cancel-button">Cancel</h3>
            
        </div>
    </div>
    `;
}
