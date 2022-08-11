function renderGoal(habit){
    return `
    <div class="goal">
        <h3>Current Goal:</h3>
        <p class="repetitions">${habit.reps}</p>
        <p class="per">times per</p>
        <p class="frequency">${habit.frequency}</p>
    </div>
    
    `

}