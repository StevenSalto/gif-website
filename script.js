const SEARCH_BAR= document.querySelector("#searchBar")
const BTN = document.querySelector("#submitButton")
const FORM = document.querySelector("#form")
const GIF_SECTION = document.querySelector("#gifSection")
const API_KEY = 'z9qEJKCAcrrMCA7q77qHJXLDkv111Kra';

let searchPhrase = 'naruto';
let limit = 9;
let rating = 'g';

let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=${limit}&rating=${rating}`;

FORM.addEventListener("submit", test)

function test(evt) {
    evt.preventDefault();
    console.log("test");
    getResults();
}
async function getResults() {
    console.log("getResults")
    let resp =  await fetch(url);
    let response =  await resp.json();
    console.log(response);
    //GIF_SECTION.innerHTML = `<img src="${response.data[1].images.original.url}">`
    displayResults(response.data);
}

function displayResults(gifs) {
    console.log("displayResults")
    gifs.forEach(element => {
        console.log(element)
        GIF_SECTION.innerHTML += `<img src='${element.images.original.url}'>`
    });
}
console.log("eof")
