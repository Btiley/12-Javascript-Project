//Select UFO table
var tbody = d3.select("tbody");
// Bring in data from data.js
console.log(data);

// Log each sighting
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

