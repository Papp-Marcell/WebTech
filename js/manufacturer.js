$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers",function (data){
         
         var table = $("#manufacturerTable");
         $.each(data,function (key, value){
             var row = $('<tr></tr>');
             var idCell = $('<td>'+value._id+'</td>');
             var nameCell = $('<td>'+value.name+'</td>');
             var countryCell = $('<td>'+value.country+'</td>');
             var foundedCell = $('<td>'+value.founded+'</td>');
             var deleteCell = $('<td>'+"<button type='button' onclick='productDelete(this);' class='btn btn-default'><img src='images/deleteIcon.png'  width='50px'></button>"+'</td>');
             $(row).append(idCell);
             $(row).append(nameCell);
             $(row).append(countryCell);
             $(row).append(foundedCell);
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
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + deleteID,
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