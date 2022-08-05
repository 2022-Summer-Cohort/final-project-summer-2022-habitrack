export default function newHabit(){
    return `
    <div class="new-habit-container">
        <div class="habit-form">
        <div class="new-habit-name">
            <label for="habit-name">Habit Name:</label>
            <input type="text" name="Habit Name" id="habit-name">
        </div>
        <div class="checkbox">
            <label for="build">Build</label>
            <input type="checkbox" name="build" id="build">
            <label for="break">Break</label>
            <input type="checkbox" name="break" id="break">
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
                <option value="&#9200;">&#9200;</option>
                <option value="">&#9940;</option>
                <option value="">&#129367;</option>
                <option value="">&#129382;</option>
                <option value="">&#127827;</option>
                <option value="">&#127866;</option>
                <option value="">&#127869;</option>
                <option value="">&#127912;</option>
                <option value="">&#127926;</option>
                <option value="">&#127939;</option>
                <option value="">&#127947;</option>
                <option value="">&#128095;</option>
                <option value="">&#128181;</option>
                <option value="">&#128218;</option>
                <option value="">&#128241;</option>
                <option value="">&#128250;</option>
                <option value="">&#128684;</option>
                <option value="">&#128690;</option>
                <option value="">&#128719;</option>

            </select>
            </div>
            <div class="goal">
                <label for="goal">Set your goal:</label>
                <select name="" id="numOfTimes">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                </select><p>/</p>
                <select name="" value="" id="per">
                    <option value="">Day</option>
                    <option value="">Week</option>
                </select>
            </div>
            <button class="new-habit-save-button button-40">Save</button>

        </div>
    </div>
    `
}