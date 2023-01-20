//Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(moment().format("dddd, MMMM do"));

//Present timeblocks for standard business hours when the user scrolls down.
    //Create rows with 3 columns of varying sizes
    //Create a event listener for scrolling
$("#calendar-grid").append(
    
)

//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    //link the event column with a time and color
        //Link past hours with grey, present with red and future with green 

//Allow a user to enter an event when they click a timeblock

//Save the event in local storage when the save button is clicked in that timeblock.

//Persist events between refreshes of a page