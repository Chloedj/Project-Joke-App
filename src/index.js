let answerElement = document.querySelector("#answer");

function generateJoke(event) {
    event.preventDefault();

    
    answerElement.innerHTML = "Generating..."; 

    let inputElement = document.querySelector("#input");

    let apiKey = "ab6f607t41943e02220ae3724eo64aeb";
    let context = "you are an expert in hilarious dad jokes. Keep it clean though";
    let prompt = `tell me a joke about ${inputElement.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl)
         .then(displayJoke)
         .catch(error => console.error('Error fetching joke:', error));
}

function displayJoke(response) {
    new Typewriter(answerElement, {
        strings: response.data.answer,
        autoStart: true,
        loop: false,
        delay: 13,
        cursor: "",
    });
}

let formElement = document.querySelector("#joke-generator-form");
formElement.addEventListener("submit", generateJoke);