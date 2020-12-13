$(document).ready(function () {
   $.getJSON("https://webtechcars.herokuapp.com/api/cars",function (data){
        var table = $("#carTable");
        $.each(data,function (key, value){
            var row = $('<tr></tr>');
            var idCell = $('<td>'+value._id+'</td>');
            var nameCell = $('<td>'+value.name+'</td>');
            var consumptionCell = $('<td>'+value.consumption+'</td>');
            var colorCell = $('<td>'+value.color+'</td>');
            var manufacturerCell = $('<td>'+value.manufacturer+'</td>');
            var availableCell = $('<td>'+value.avaiable+'</td>');
            var yearCell = $('<td>'+value.year+'</td>');
            var horsepowerCell = $('<td>'+value.horsepower+'</td>');
            var deleteCell = $('<td>'+"<button type='button' onclick='productDelete(this);' class='btn btn-default'><img src='images/deleteIcon.png'  width='50px'></button>"+'</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(availableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(row).append(deleteCell);
            $(table).append(row);

        })
   })
})


function productDelete(that){
    var deleteID = $(that).parents("tr").children()[0].innerHTML;
    var confirmation = confirm("Are you sure you want to delete id: "+deleteID+"?");
    if(confirmation){
        

        $.ajax({
            type: "DELETE",
            url: 'https://webtechcars.herokuapp.com/api/cars/' + deleteID,
            success: function (data) {
                console.log(data);
                alert(deleteID + " deleted.");
            },
            error: function (data) {
                console.log('Error:', data);
                alert(deleteID + " not deleted.");
            }
        })
        $(that).parents("tr").remove();
    }

    

}