//    https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=eff69f0aa0f4a3dca4f270145307a9ce
// require(".env").config();
let input__field = document.getElementById('city');
let search_button = document.getElementById('search').addEventListener('click' , handlesearchclick);
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "eff69f0aa0f4a3dca4f270145307a9ce"
function handlesearchclick(){
    let city_name = input__field.value;
    if(city_name === ""){
        alert('Enter city name first');
    }
    else{
        weather_data(city_name)
        // input__field.value = " ";
    }
}

const weather_data = async (city_name) =>{
    const response = await fetch(API_URL + city_name + `&appid=`+API_KEY)
    const resp__data = await response.json()
    console.log(resp__data.main)
    show_in_html(resp__data.main)
}

function show_in_html(data){
    document.getElementById('feels-like').innerHTML = Math.round(data.feels_like - 273.15);
    document.getElementById('grnd_level').innerHTML = data.grnd_level;
    document.getElementById('humidity').innerHTML = data.humidity;
    document.getElementById('pressure').innerHTML = data.pressure;
    document.getElementById('sea_level').innerHTML = data.sea_level;
    document.getElementById('temp').innerHTML = Math.round(data.temp - 273.15);
    document.getElementById('temp-max').innerHTML = Math.round(data.temp_max - 273.15);
    document.getElementById('temp-min').innerHTML = Math.round(data.temp_min - 273.15);
}