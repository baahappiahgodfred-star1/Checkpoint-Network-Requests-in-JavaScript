// Insérez votre clé API OpenWeatherMap ici
const API_KEY = "7febcddbfc16a68cc1e0f8d2d6243911"
const BASE = 'https://api.openweathermap.org/data/2.5/weather';

const el = id => document.getElementById(id);
const searchForm = el('searchForm');
const cityInput = el('cityInput');
const geoBtn = el('geoBtn');
const card = el('card');
const locationEl = el('location');
const tempEl = el('temp');
const descEl = el('description');
const iconEl = el('icon');
const humidityEl = el('humidity');
const windEl = el('wind');
const errorEl = el('error');
const searchBtn = el('searchBtn');

function setLoading(isLoading){
  searchBtn.disabled = isLoading;
  geoBtn.disabled = isLoading;
  if(isLoading) searchBtn.textContent = 'Chargement...';
  else searchBtn.textContent = 'Rechercher';
}

async function fetchWeatherByCity(city){
  if(!API_KEY || API_KEY === 'YOUR_API_KEY'){
    showError('Ajoutez votre clé API dans script.js (API_KEY).');
    return;
  }
  setLoading(true);
  clearError();
  try{
    const res = await fetch(`${BASE}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
    if(!res.ok) throw new Error('Ville introuvable');
    const data = await res.json();
    updateUI(data);
  }catch(err){
    showError(err.message);
  }finally{setLoading(false)}
}

async function fetchWeatherByCoords(lat, lon){
  if(!API_KEY || API_KEY === 'YOUR_API_KEY'){
    showError('Ajoutez votre clé API dans script.js (API_KEY).');
    return;
  }
  setLoading(true);
  clearError();
  try{
    const res = await fetch(`${BASE}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    if(!res.ok) throw new Error('Impossible de récupérer la météo par position');
    const data = await res.json();
    updateUI(data);
  }catch(err){
    showError(err.message);
  }finally{setLoading(false)}
}

function updateUI(data){
  const name = `${data.name}${data.sys && data.sys.country ? ', ' + data.sys.country : ''}`;
  const t = Math.round(data.main.temp);
  const desc = data.weather && data.weather[0] ? data.weather[0].description : '';
  const icon = data.weather && data.weather[0] ? data.weather[0].icon : '';

  locationEl.textContent = name;
  tempEl.textContent = t;
  descEl.textContent = desc;
  humidityEl.textContent = data.main.humidity;
  windEl.textContent = data.wind.speed;
  iconEl.src = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : '';
  iconEl.alt = desc;
  card.classList.remove('hidden');
}

function showError(message){
  errorEl.textContent = message;
}

function clearError(){
  errorEl.textContent = '';
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if(city) fetchWeatherByCity(city);
});

geoBtn.addEventListener('click', () => {
  if(!navigator.geolocation){
    showError('Géolocalisation non supportée par votre navigateur.');
    return;
  }
  navigator.geolocation.getCurrentPosition(pos => {
    const {latitude, longitude} = pos.coords;
    fetchWeatherByCoords(latitude, longitude);
  }, err => {
    showError('Impossible d’obtenir la position: ' + err.message);
  });
});

// For quick testing you can call fetchWeatherByCity('Paris') in console
