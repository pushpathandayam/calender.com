document.addEventListener("DOMContentLoaded", function() {
    const months = ["January", "February", "March",
    "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
    ]
    const totalDaysOfTheWeek = 6 // nums starts form 0 to 6 - 7 days
    const today = new Date(2024, 9, 4);
    // today.setDate(16)

    const currentMonthIndex = today.getMonth(); // 0 - 11
    document.getElementById("current-month").textContent = months[currentMonthIndex];
    document.getElementById("full-date").textContent = today.toDateString();

    // what was the day of the week(Mon or Tue...Sun) on the 1st date of the month

    const firstDayOfTheMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    console.log(firstDayOfTheMonth);
    // Which of the week was the last date on
    const lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0).getDay();
    // How may days are there in the current month

    const numberOfDaysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    console.log(numberOfDaysInMonth);

    let daysHTML = "";

    const daysElement = document.querySelector(".days");

    // loop for printing empty dates

    for(let index=0; index < firstDayOfTheMonth; index++) {
        daysHTML += "<p class=\"date\">" +"</p>"
    }
    daysElement.innerHTML = daysHTML;

    // loop for printing the dates

    for(let date=1; date<=numberOfDaysInMonth; date++) {
        if(today.getDate() === date) {
            daysHTML += "<p class=\"date today\">" + date + "</p>"
        } else {
            daysHTML += "<p class=\"date\">" + date + "</p>"
        }
    }
    // to print empty dates in case the last day of the month doesn't fall on saturday
    if(lastDay < 6) {
        console.log(lastDay)
        for(let index=lastDay; index<totalDaysOfTheWeek; index++) {
            daysHTML += "<p class=\"date\">" +"</p>"
        }
    }
    console.log(daysHTML);
    daysElement.innerHTML = daysHTML;
})


