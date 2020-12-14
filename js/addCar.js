var fullData;
$(document).ready(function (){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
        var dropdown=$('#dropdownM');
        dropdown.append('<option selected="true" disabled>Choose Manufacturer</option>');
        dropdown.prop('selectedIndex', 0);
        $.each(data, function(key,value){
            dropdown.append($('<option></option>').text(value.name));
        })

        var dropdown=$('#dropdownM2');
        dropdown.append('<option selected="true" disabled>Choose Manufacturer</option>');
        dropdown.prop('selectedIndex', 0);
        $.each(data, function(key,value){
            dropdown.append($('<option></option>').text(value.name));
        })
    })
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data){
        var dropdown=$('#idDropdown');
        dropdown.append('<option selected="true" disabled>Choose ID</option>');
        dropdown.prop('selectedIndex', 0);
        $.each(data, function(key,value){
            dropdown.append($('<option></option>').text(value._id));
        })
        fullData=data;
        console.log(fullData);
    })
})


function myFunction(event) {
    event.preventDefault();
    alert("Car added");
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
    

function selected(){
   selectedID=document.getElementsByName("ID2")[0].value;
   for(var i=0;i<fullData.length;i++){
        var obj=fullData[i];
        if(obj._id==selectedID){
            document.getElementsByName("Name2")[0].value=obj.name;
            document.getElementsByName("Consumption2")[0].value=obj.consumption;
            //This can only get correct colors
            document.getElementsByName("Color2")[0].value=obj.color;
            //This can only select manufacturers from the manufacturers page.
            document.getElementsByName("Manufacturer2")[0].value=obj.manufacturer;
            document.getElementsByName("Available2")[0].value=obj.avaiable;
            document.getElementsByName("Year2")[0].value=obj.year;
            document.getElementsByName("Horsepower2")[0].value=obj.horsepower;
        }

   }
   
}

    
function myModify(event) {
        event.preventDefault();
        alert("Car modified");
        let car = {
            
            name: document.getElementsByName("Name2")[0].value,
            consumption: document.getElementsByName("Consumption2")[0].value,
            color: document.getElementsByName("Color2")[0].value,
            manufacturer: document.getElementsByName("Manufacturer2")[0].value,
            avaiable: document.getElementsByName("Available2")[0].value,
            year: document.getElementsByName("Year2")[0].value,
            horsepower: document.getElementsByName("Horsepower2")[0].value
        }
        
        
        var carJSON = JSON.stringify(car);
        console.log(carJSON);
    
        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/cars/",
            data: carJSON,
            error: function(e) {
              console.log(e);
            },
            dataType: "json",
            contentType: "application/json"
        });
        $.ajax({
            type: "DELETE",
            url: 'https://webtechcars.herokuapp.com/api/cars/' + document.getElementsByName("ID2")[0].value,
            success: function (data) {
                console.log(data);
                
            },
            error: function (data) {
                console.log('Error:', data);
                
            }
        })
        
}

  