$(document).ready(function() {
    $("#home").removeClass("d-none");
})
$(document).on("click", "#btnAbout", function(event){
    event.preventDefault();
    $("#home").addClass("d-none");
    $("#about").removeClass("d-none");
})
$(document).on("click", "#btnPortfolio", function(){
    event.preventDefault();
    $("#home").addClass("d-none");
    $("#portfolio").removeClass("d-none");
})
$(document).on("click", ".logo", function(){
    $("#about").addClass("d-none");
    $("#portfolio").addClass("d-none");
    $("#home").removeClass("d-none");
})
function getGitHubRepos(){
    let gitArray = ['GifTastic', 'TriviaGame','Responsive-Portfolio','WordGuessGame','DeliveryBusinessWebConcept', 'localRestaurantWebConcept'];
    $.ajax({
        url: 'https://api.github.com/users/vcuPierre/repos?type=owner&sort=created',
        method: "GET"
    }).done(function(data){
        console.log(data);
        for (let i = 0; i < data.length; i++){
            if (gitArray.includes(data[i].name)){
                console.log(i);
            }
        }
    });
}
