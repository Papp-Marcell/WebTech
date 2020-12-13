var fullData;
$(document).ready(function (){
  $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
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
    alert("Manufacturer added");
    let car = {
        name: document.getElementsByName("Name")[0].value,
        country: document.getElementsByName("Country")[0].value,
        founded: document.getElementsByName("Founded")[0].value,
    }
    

    var carJSON = JSON.stringify(car);
    console.log(carJSON);

    $.ajax({
        type: 'POST',
        url: "https://webtechcars.herokuapp.com/api/manufacturers",
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
           document.getElementsByName("Country2")[0].value=obj.country;
           //can only get dates in the correct format
           document.getElementsByName("Founded2")[0].value=obj.founded;
       }

  }
  
}

function myModify(event) {
  event.preventDefault();
  alert("Manufacturer modified");
  let car = {
      
    name: document.getElementsByName("Name2")[0].value,
    country: document.getElementsByName("Country2")[0].value,
    founded: document.getElementsByName("Founded2")[0].value,
  }
  
  
  var carJSON = JSON.stringify(car);
  console.log(carJSON);

  $.ajax({
      type: 'POST',
      url: "https://webtechcars.herokuapp.com/api/manufacturers/",
      data: carJSON,
      error: function(e) {
        console.log(e);
      },
      dataType: "json",
      contentType: "application/json"
  });
  $.ajax({
      type: "DELETE",
      url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + document.getElementsByName("ID2")[0].value,
      success: function (data) {
          console.log(data);
          
      },
      error: function (data) {
          console.log('Error:', data);
          
      }
  })
  
}
