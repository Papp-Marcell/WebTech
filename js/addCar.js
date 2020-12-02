$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
        var dropdown=$('#dropdownM');
        dropdown.append('<option selected="true" disabled>Choose Manufacturer</option>');
        dropdown.prop('selectedIndex', 0);
        $.each(data, function(key,value){
            dropdown.append($('<option></option>').text(value.name));
        })
    })
})


function myFunction(event) {
    event.preventDefault();
    alert("The form was submitted");
    let car = {
        name: document.getElementsByName("Name")[0].value,
        consumption: document.getElementsByName("Consumption")[0].value,
        color: document.getElementsByName("Color")[0].value,
        manufacturer: document.getElementsByName("Manufacturer")[0].value,
        avaiable: document.getElementsByName("Available")[0].value,
        year: document.getElementsByName("Year")[0].value,
        horsepower: document.getElementsByName("Horsepower")[0].value
    }
    

    var carJSON = JSON.stringify(car);
    console.log(carJSON);

    $.ajax({
        type: 'POST',
        url: "https://webtechcars.herokuapp.com/api/cars",
        data: carJSON,
        error: function(e) {
          console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
      });
    }

  