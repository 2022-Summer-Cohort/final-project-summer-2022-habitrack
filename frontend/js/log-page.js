export default function logPage(habit) {
    return `
    <div class="log-page-container">
    <div class="log">
    <h3 class="habit__title__log">${habit.name}</h3>

        <ul>
        ${habit.logs.map(log => {
            return`
            <li class="log__info">
            <p class="log__time-date log__date">${log.date}</p>
            <p class="log__time-date log__time">${log.time}</p>
            <p class="log__note">${log.note}</p>
            <p class="log-rating">${log.rating}</p>
        </li>
            `
        }).join("")
        }
        </ul>
    </div>
</div>
    `
}