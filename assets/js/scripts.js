$(document).ready(function() {
    $("#home").removeClass("d-none");
    getGithubRepos();
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
function getGithubRepos(){
    let gitArray = ['GifTastic', 'TriviaGame','Responsive-Portfolio','WordGuessGame','DeliveryBusinessWebConcept', 'LocalRestaurantWebConcept'];
    $.ajax({
        url: 'https://api.github.com/users/vcuPierre/repos?type=owner&sort=created',
        method: "GET"
    }).done(function(data){
        console.log(data);
        var dataArray = [];
        for (let i = 0; i < data.length; i++){
            if (gitArray.includes(data[i].name)){
                dataArray.push(data[i]);
            }
        }
        addGithubRepos(dataArray);
    });
}
function addGithubRepos(results){
    var htmlHolder =  $("#projectHolder");

    for (let i = 0; i < results.length; i++){
        let mainDiv = $("<div>", {id: "project"+i});
        let rowDiv = $("<div>", {class: "row"});
        let leftDiv = $("<div>", {class: "col-8 text-center"});
        let rightDiv = $("<div>", {class: "col-4 text-center"});
        let projectTitleDiv = $("<div>", {class: "title"});
        let projectDescDiv = $("<div>", {class: "description"});
        let projectLangDiv = $("<div>", {class: "lang"});
        let projectButton = $("<a>", {href: results[i].html_url, class: "btn btn-outline-success"});
        let projectImg = $("<img>", {src: getImgPath(results[i].name), alt: " ", class: "imgSize"});
        projectTitleDiv.append($("<h3>").text(results[i].name));
        projectDescDiv.append($("<h4>").text(results[i].description));
        projectLangDiv.append($("<h5>").text(results[i].language));
        projectButton.text("Git Repo");
        leftDiv.append(projectTitleDiv, projectDescDiv, projectLangDiv, projectButton);
        rightDiv.append(projectImg);
        rowDiv.append(leftDiv, rightDiv);
        mainDiv.append(rowDiv, $("<hr>"));
        mainDiv.appendTo(htmlHolder);
    }

    function getImgPath(imgName) {
        // created an object literal to reference path to img related to project
        const imgs = {
            'GifTastic': 'assets/imgs&Files/giphy.png',
            'TriviaGame': 'assets/imgs&Files/trivia.jpg',
            'Responsive-Portfolio': 'something',
            'WordGuessGame': 'assets/imgs&Files/hangman.png',
            'DeliveryBusinessWebConcept': 'something',
            'LocalRestaurantWebConcept': 'something'
        }
        return imgs[imgName];
    }
}
