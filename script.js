var res = fetch(" https://restcountries.com/v3.1/all")
res.then((data) => data.json()).then((data1) => foo(data1))

var contain = document.createElement("div")
contain.className = "container"

var row = document.createElement("div")
row.className = "row"



function foo(data1) {
    for(var i=0;i<data1.length;i++)
    {
        var names=data1[i].name.common
        var cap=data1[i].capital
        var pop=data1[i].population
        var re=data1[i].region
        var flag=data1[i].flags.png

    var column = document.createElement("div")
    column.className = "col-md-4"
    column.innerHTML=`<div class="card">
    <h5 class="card-header text-center">${names}</h5>
    <img class="card-img-top" src="${flag}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Capital: ${cap}</h5>
      <p class="card-text">Population: ${pop} <br> Region: ${re}</p>
      <a href="#" class="btn btn-primary">click for weather</a>
    </div>
  </div>`

  row.append(column)
  contain.append(row)
  document.body.append(contain)
    }
   
}