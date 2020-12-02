function onload() {
    
}

$(document).ready(function () {
    $("#content").load("home.html");
    
    $.each($(".button"), function (mbIndex, mbValue){
        $(mbValue).click(function (event){
            event.preventDefault();
            $("#content").load($(this).find('a').attr("href"));
        })

    })
})