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
        var pop=data1[i].population
        var re=data1[i].region
        var flag=data1[i].flags.png

    var column = document.createElement("div")
    column.className = "col-md-4"
    column.innerHTML=`<div class="card mt-3">
    <h5 class="card-header text-center">${names}</h5>
    <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
          <img class="card-img-top img-fluid" src="${flag}" alt="Card image cap">
        </div>
    <div class="card-body text-center">
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