function myFunction(event) {
    event.preventDefault();
    alert("The form was submitted");
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