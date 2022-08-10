export default function userDashboard(habits){
    return `
    <div class="habits-background">
   
    ${
        habits.map(habit => {
        return `
          <div class="habit">
            <div class="progress-bar">
                    <p class="habit-name">${habit.name}</p>
                    <input type="hidden" class="habit-color" name="background-color" value="${habit.color}">
                    <input type="hidden" class="habit-id" value="${habit.id}">
                    </div>
            <div class="edit-buttons">
                <p class="edit">🗒</p><br>
                <p class="delete-habit">🗑</p><br>
            </div>    
        </div>

        
        `
    }).join("")
}
</div>
<div class="add-habit-button">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="316.513px" height="316.513px" viewBox="0 0 316.513 316.513" style="enable-background:new 0 0 316.513 316.513;"
xml:space="preserve">
<g>
<path d="M158.253,0C71,0,0.012,71.001,0.012,158.263c0,87.256,70.989,158.25,158.241,158.25
c87.259,0,158.248-70.994,158.248-158.25C316.501,71.001,245.518,0,158.253,0z M230.891,177.982h-57.748v52.914
c0,7.428-4.864,13.438-12.301,13.438c-7.422,0-12.298-6.017-12.298-13.438v-52.914H85.634c-7.44,0-13.454-4.864-13.454-12.298
s6.014-12.301,13.454-12.301h62.909V85.616c0-7.434,4.876-13.453,12.298-13.453c7.437,0,12.301,6.02,12.301,13.453v67.768h57.748
c7.439,0,13.456,4.867,13.456,12.301S238.33,177.982,230.891,177.982z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
   
</div>
    
    `
}