// Get the Data (const to prevent change).
const sightings = data;
//Select table, input box and filter button elements
var tbody = d3.select("tbody");
// Select input box and button
  var form = d3.select("#form");
  var button = d3.select("#filter-btn");

//Function to generate complete table based on ufo data
function tablecreate(data){
  tbody.html("");
  data.forEach((sightings) => {
        
    //Create new row for each item in filtered data
   var row = tbody.append("tr");
    
    //Create and append cell for each data value
    
    Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});


}
//Function to obtain filtered data based on user input and 
function tablefilter(){
  console.log("intialized");
    
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime").property("value");

    var completeTable = sightings;

    if (dateInput){
      completeTable = completeTable.filter(ufo => ufo.datetime === dateInput);

    }
    tablecreate(completeTable);

   };
tablecreate(sightings);

button.on("click",tablefilter);
form.on("submit",tablefilter);


