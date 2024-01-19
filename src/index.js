function generateJoke(event){
    event.preventDefault();

    let answerElement = document.querySelector("#answer");
    answerElement.innerHTML = ""; 

    new Typewriter(answerElement, {
        strings: "What do you call a fish wearing a bowtie? Sofishticated",
        autoStart: true,
        loop: false,
        delay: 13,
        cursor: "",
    });
}

let formElement = document.querySelector("#joke-generator-form");
formElement.addEventListener("submit", generateJoke);