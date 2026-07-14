# Weather App

A simple weather application built with HTML, CSS, and JavaScript using the OpenWeather API.

## Features

* Search weather by city name
* Get weather using current location
* Display:

  * Temperature
  * Weather description
  * Humidity
  * Wind speed
  * Weather icon
* Responsive UI
* Error handling for invalid cities or geolocation issues

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* OpenWeather API

## Project Structure

```txt
project/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/baahappiahgodfred-star1/Network_Requests_in_JavaScript_checkpoint-.git
```

### 2. Open the project

Open the folder in VS Code or your preferred editor.

### 3. Get an OpenWeather API key

Create a free account on OpenWeather and generate an API key.

Website:

[https://openweathermap.org/](https://openweathermap.org/)

### 4. Add your API key

In `script.js`, replace:

```js
const API_KEY = 'TA_CLE_ICI';
```

with:

```js
const API_KEY = 'YOUR_API_KEY';
```

### 5. Run the project

Simply open `index.html` in your browser.

## Example

Search for:

* Paris
* Dakar
* London
* Tokyo

Or use the "Ma position" button to get weather based on your current location.

## Notes

* This project uses the browser Geolocation API.
* Your browser may ask for location permission.
* The API key is exposed in the frontend for educational purposes.

## Future Improvements

* Add 5-day forecast
* Dark/light theme
* Save recent searches
* Add loading animation
* Display more weather details

## Author

Godfred
