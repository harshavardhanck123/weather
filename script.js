async function bar(){
var res = await fetch(" https://restcountries.com/v3.1/all")
var res1=await res.json()
foo(res1)
}
bar()

var contain = document.createElement("div")
contain.className = "container"

var row = document.createElement("div")
row.className = "row gy-4"

 function foo(data1) {
    for(var i=0;i<data1.length;i++)
    {
        var names=data1[i].name.common
        var cap=data1[i].capital
        var re=data1[i].region
        var flag=data1[i].flags.png
        var country=data1[i].cioc
        var lat = data1[i].latlng[0];
        var lon = data1[i].latlng[1];
    var column = document.createElement("div")
    column.className = "col-md-4"
    column.innerHTML=`<div class="card mt-3" style="border: 2px solid white;" >
    <h5 class="card-header text-center" style="background-color:black;color:white;" >${names}</h5>
    <div class="d-flex justify-content-center align-items-center" style="height: 200px;background-image:linear-gradient(to right,#BDB294,#58655E)">
          <img class="card-img-top img-fluid " src="${flag}" alt="Card image cap">
        </div>
    <div class="card-body text-center" style="background-image:linear-gradient(to right,#BDB294,#58655E);color:white">
      <p class="card-text">Capital: ${cap}  <br> Region: ${re}<br> Country Code: ${country}<br> LatLng: ${lat},${lon}</p>
      <a href="#" class="btn btn-primary weather-btn" data-lat="${lat}" data-lon="${lon}" style="background-color: transparent; color: inherit; border-color: inherit;">Click for Weather</a>
    </div>
  </div>`

  row.append(column)
  contain.append(row)
  document.body.append(contain)
    }
    var weatherButtons = document.querySelectorAll('.weather-btn');
    weatherButtons.forEach(function(button) {
        button.addEventListener('click', async function() {
            var lat = this.getAttribute('data-lat');
            var lon = this.getAttribute('data-lon');
            var temperature = await Weather(lat, lon);
            var cardBody = this.parentElement;
            var temperatureElement = document.createElement('p');
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            cardBody.replaceChild(temperatureElement, this);
        });
    });
}

async function Weather(lat,lon,button){
  let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3fdb46d68715c1511c6c2a05647e4ab9`)
  let data1=await data.json()
  return data1.main.temp;
}

