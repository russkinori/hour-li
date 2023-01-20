//Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(moment().format("dddd, MMMM do"));

let hours = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
console.log(hours)
//Present timeblocks for standard business hours when the user scrolls down.
    //Create rows with 3 columns of varying sizes
    //Create a event listener for scrolling

 //create a row div using jquery 
 //create a column div and append to the row div

for (let i = 0; i < hours.length; i++) {
    const hour = hours[i];

    $("#calendar-grid").append(
        `<div class="row">
        <div class="col-1 hour">
        ${hour}
        </div>
        <textarea class="col-10 description">
        </textarea>
        <button class="col-1 saveBtn" style="border: none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-save2-fill" viewBox="0 0 16 16"><path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z"/></svg>
        </button>
        </div>`
    );
    
}



//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    //link the event column with a time and color
        //Link past hours with grey, present with red and future with green 

//Allow a user to enter an event when they click a timeblock
    //
//Save the event in local storage when the save button is clicked in that timeblock.

//Persist events between refreshes of a page