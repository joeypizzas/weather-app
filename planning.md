# Planning for weather app

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- Structure is header, body, and footer.
  - Header is title and maybe SVG?
  - Body has the main weather app portion.
  - Typical footer.
- Body has a top area to search for the weather location. Simple field with a search button and a prompt to enter, likely all on one line.
- Below that is a large card with the weather for the searched location. It will have:
  - Large text, location, temperature, forecast for that day, and some kind of weather icon for the forecast.
  - Smaller text area below that includes several items, like high and low temp, humidity, wind, UV index, pressure, etc.
- Clean UI with a nice color scheme:
  - Header background: linear-gradient(135deg, #FFB347, #FFD194)
  - Main background: #FDF6EC
  - Card / container background: #FFFFFF or #FFF9F3
  - Footer background: #ECECEC
  - Primary accent: #FFB347
  - Secondary accent: #6495ED
  - Text / primary content: #2D2D2D

## How do you plan to design the application state?

- Async function that takes city input, gets weather data with it, creates an object with the result and then returns that object.
- Function to process weather data. Takes object parameter (will invoke the async function getting weather data as param), reduces object to new object with only data needed for the app, and then returns that new object. This will include the weather icon SVG from visual crossing API.

## How do you plan to organize your project files?

- HTML
- CSS
- JS index: initializes listeners on search bar and invokes initial weather for default location.
- weatherData.js: application state module.
- weatherForm.js: view module for form to get weather data.
- showWeather.js: view module for showing weather data.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- Only input is weather location from the user, which comes via a simple submit form.

## Given your inputs, what are the steps necessary to return the desired output?

- Build UI skeleton with sections.
- Write application state and test it in the console.
- Hardcode UI to get styling down. Form will stay hardcoded. Weather card data will not.
- Write function to add weather data to UI. Also to remove.
- Add event listeners on form for style and then to add weather data to UI based on input.
