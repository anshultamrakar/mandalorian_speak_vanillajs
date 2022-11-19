
var btnTranslate  = document.querySelector("#btn-translate")
var textInput = document.querySelector("#input-txt")
var outputText = document.querySelector("#output")

 var serverUrl = "https://api.funtranslations.com/translate/mandalorian.json"


function getTranslationApp(text){
    return serverUrl + "?" + "text=" + text
}


function errorHandler(error){
    console.log(error)
}


function clickHandler(){
    var inputText = textInput.value
    fetch(getTranslationApp(inputText))
    .then(response => response.json())
    .then(json => output.innerHTML = json.contents.translated)
    .catch(errorHandler)
}




btnTranslate.addEventListener("click", clickHandler)






