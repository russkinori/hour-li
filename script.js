//Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(moment().format("dddd, MMMM Do"));

let hours = [
    ["9AM", moment().hour(9)],
    ["10AM", moment().hour(10)],
    ["11AM", moment().hour(11)],
    ["12PM", moment().hour(12)],
    ["1PM", moment().hour(13)],
    ["2PM", moment().hour(14)],
    ["3PM", moment().hour(15)],
    ["4PM", moment().hour(16)],
    ["5PM", moment().hour(17)],
];
// console.log(hours)

//Present timeblocks for standard business hours when the user scrolls down.
//Create rows with 3 columns of varying sizes
//Create a event listener for scrolling

//create a row div using jquery 
//create a column div and append to the row div

let TotalHours = 24;
let calendarHours = [];
let currentHour = moment().hour();

function timeOneDay() {
    let formattedTime;
    for (i = 0; i < TotalHours + 1; i++) { //fill in all of the hours
        formattedTime = (moment().subtract(i, "hours")).format("hA");  //give the time in format X AM/PM
        calendarHours.unshift(formattedTime);  //add to beginning of array
    }                                //do this for all 24 hours
}
timeOneDay();
// console.log(hours);

for (let i = 0; i < hours.length; i++) {
    const [time, hour] = hours[i];

    $("#calendar-grid").append(
        `<div class="row">
        <div class="col-1 hour">
        ${time}
        </div>
        <textarea class="col-10 description">

        </textarea>
        <button class="col-1 saveBtn" style="border: none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-save2-fill" viewBox="0 0 16 16"><path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z"/></svg>
        
        </button>
        </div>`
    );

};


console.log(currentHour);

$()

function colorCode() {
    if (calendarHours[0] === currentHour) {
        $(".description").css("background-color", "red")
    }
};

//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//link the event column with a time and color
//Link past hours with grey, present with red and future with green 

//Allow a user to enter an event when they click a timeblock
//
//Save the event in local storage when the save button is clicked in that timeblock.
//Create an on click event to store input to local storage
// localStorage.setItem(".textArea")
//retrieve data from local storage on page load
// $("textArea").localStorage.getItem(hours)
//Assign a data-time to each button(html)
//
//Compare data-time to current moment and add css class 
// if (currentHour ====) {

// }
$("textArea").addClass("future")
//create an event listener on the buttons to grab the text from the textarea

$("button").on("click", function (event) {
    $(event.this).siblings("textArea").val()
    $(event.this).attr("data-time")

})
//Persist events between refreshes of a page