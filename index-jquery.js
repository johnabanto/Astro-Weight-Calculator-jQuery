$(document).ready(function(){ // Code stating that jQuery will be used.

    var planets = [
      ['Pluto', 0.06],
      ['Neptune', 1.148],
      ['Uranus', 0.917],
      ['Saturn', 1.139],
      ['Jupiter', 2.640],
      ['Mars', 0.3895],
      ['Moon', 0.1655],
      ['Earth', 1],
      ['Venus', 0.9032],
      ['Mercury', 0.377],
      ['Sun', 27.9]
    ];  // New array without selectors

    planets.reverse();  // Reverse of the array

    planets.forEach(function(value) {
        $('#planet').append($('<option></option>').text(value[0]).val(value[1]));
    });     //Take selected planet from drop down list and apply value[0] as the Planet and value[1] as the weight. 

    $('#button').click(function() {
        var theWeight = $("#weight").val();  // Take the number from the input box and make it the variable theWeight.
        var thePlanet = $("select option:selected").text(); // Take the planet that was selected from the option drop down menu and chose the first value of the array and make it the variable thePlanet.
        var theGravity = $("select option:selected").val(); // Same as above but take the second value from the selected Planet and make it the variable theGravity.
        var result = theWeight * theGravity; // Variables theWeight and theGravity are multiplied to create the variable result.

        $("#result").text("If you were on " + thePlanet + ", you would weigh " + Math.round(result) + " lbs!")
    }); // The variable result is activated and written with the above statement and associate variables are inserted.
});
