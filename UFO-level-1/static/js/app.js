// Get the Data
var sightings = data;
//Select table, input box and filter button elements
var tbody = d3.select("tbody");
// Select input box and button
var form = d3.select("#form");
var button = d3.select("#filter-btn");

//Create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
  
  d3.event.preventDefault();

  //select the input element
  var inputElement = d3.select("datetime");

  //get the value of input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
}




//filterbutton.on("click",runFilter);
//inputBox.on("submit",runFilter);

//function runFilter(){
  //  d3.event.preventDefault();
    //var inputElement = d3.select("datetime");
    //var inputValue = inputElement.property("value");

    //console.log(inputValue);
   // console.log(sightings);

   // var filteredSightings = sightings.filter(ufo => ufo.date);
   // console.log(filteredSightings);}



 //   data.forEach((filteredSightings) => {
   //     var row = tbody.append("tr");
     //   Object.entries(filteredSightings).forEach(([key, value]) => {
       // var cell = row.append("td");
       // cell.text(value);
       // });
 // });


