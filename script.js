// Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.
// Write the functions that hit the API. You're going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
// Write the functions that process the JSON data you're getting from the API and return an object with only the data you require for your app.
// Set up a form that will let users input their location and will fetch the weather info (still just console.log() it).
// Display the information on your webpage!
// Add any styling you like!
// Optional: add a 'loading' component that displays from the time the form is submitted until the information comes back from the API. Use DevTools to simulate network speeds.
// Push that baby to github and share your solution below!

const lookupBtn = document.getElementById("lookup");
const locationInput = document.querySelector("input#location");
const temperatureDisplay = document.querySelector("p#temperature");

const weatherAppFreeAPI = "RMR9X76YRCAMKHLQKSY2KDFU2";

async function getWeather(loc) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${weatherAppFreeAPI}&contentType=json`, {mode: 'cors'})    
    const results = await response.json();
    // console.log(results.days[0].temp); 
    return results;
}

lookupBtn.addEventListener("click", function() {
    const loc = locationInput.value;
    // console.log(loc);
    getWeather(loc).then(results => {
        const tempCelsius = (results.days[0].temp - 32) * 5 / 9;
        temperatureDisplay.textContent = `Temperature: ${tempCelsius.toFixed(2)}°C`;
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    });
})




