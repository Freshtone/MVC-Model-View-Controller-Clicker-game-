var cucumbers = 0;

function cucumberClick(number)    {
    cucumbers = cucumbers + number;
    document.getElementById("cucumbers").innerHTML = cucumbers;
}

var extremists = 0;

function buyExtremist()  {
    var extremistCost = Math.floor(10 * Math.pow(1.3, extremists));
    if (cucumbers >= extremistCost)  {
        extremists = extremists + 1;
        cucumbers = cucumbers - extremistCost;
        document.getElementById("extremists").innerHTML = extremists;
        document.getElementById("cucumbers").innerHTML = cucumbers;
    }
    var nextPrice = Math.floor(10 * Math.pow(1.3, extremists));
    document.getElementById("extremistCost").innerHTML = nextPrice;

}

window.setInterval(function() {
    cucumberClick(extremists);
  }, 1000);