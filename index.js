function drawWeather(d){
  var cel=Math.round(parseFloat(d.main.temp)-273.15);
  var faren=Math.round((parseFloat(d.main.temp)-273.15)*1.8+32);
  document.getElementById('description').innerHTML=d.weather[0].description;
  document.getElementById('temp').innerHTML=cel+"&deg;"+"C";
  document.getElementById('location').innerHTML=d.name;
}

function showWeather(cityId){
  var key="f6785d1c7184e3f7326e7f4094dbeff1";
  fetch("https://api.openweathermap.org/data/2.5/weather?id=" + cityId+"&appid="+key)
  //fetch(`api.openweathermap.org/data/2.5/weather?id=${city id}&appid={API key}`)
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    drawWeather(data);
  })
  .catch((error)=>{
    console.log(error);
  })
}
