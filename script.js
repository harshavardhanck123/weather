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
        var country=data1[i].cioc
    var column = document.createElement("div")
    column.className = "col-md-4"
    column.innerHTML=`<div class="card mt-3" style="border: 2px solid white;" >
    <h5 class="card-header text-center" style="background-color:black;color:white;" >${names}</h5>
    <div class="d-flex justify-content-center align-items-center" style="height: 200px;background-image:linear-gradient(to right,#BDB294,#58655E)">
          <img class="card-img-top img-fluid " src="${flag}" alt="Card image cap">
        </div>
    <div class="card-body text-center" style="background-image:linear-gradient(to right,#BDB294,#58655E);color:white">
      <p class="card-text">Capital: ${cap}  <br> Region: ${re}<br> Country Code: ${country}</p>
      <a href="#" class="btn btn-primary" style="background-color: transparent; color: inherit; border-color: inherit;">Click for Weather</a>
    </div>
  </div>`

  row.append(column)
  contain.append(row)
  document.body.append(contain)
    }
}