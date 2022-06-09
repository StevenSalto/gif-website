const SEARCH_BAR= document.querySelector("#searchBar")
const BTN = document.querySelector("#submitButton")
const FORM = document.querySelector("#form")
let GIF_SECTION = document.querySelector("#gifSection")
const API_KEY = 'z9qEJKCAcrrMCA7q77qHJXLDkv111Kra';
const ADD_MORE_GIFS_BTN = document.querySelector(".hidden");
let searchPhrase = 'naruto';
let limit = 9;
let rating = 'g';
let pages = 0;
let offset = pages * limit;
let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=${limit}&rating=${rating}&offset=${offset}`;

FORM.addEventListener("submit", handleFormSubmit)
ADD_MORE_GIFS_BTN.addEventListener("click", handleShowMore)

function test(evt) {
    evt.preventDefault();
    getResults();
}

async function getResults() {
    let resp =  await fetch(url);
    let response =  await resp.json();
    //console.log(response);
    //GIF_SECTION.innerHTML = `<img src="${response.data[1].images.original.url}">`
    displayResults(response.data);
}

function displayResults(gifs) {
    //console.log("displayResults")
    gifs.forEach(element => {
        GIF_SECTION.innerHTML += `<img src='${element.images.original.url}'>`
    });
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    GIF_SECTION.innerHTML = "";
    searchPhrase = SEARCH_BAR.value;
    SEARCH_BAR.value = "";
    url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=${limit}&rating=${rating}&offset=${offset}`;
    ADD_MORE_GIFS_BTN.classList.remove("hidden");
    getResults();
}

function handleShowMore(evt) {
    evt.preventDefault();
    pages += 1;
    let offset = pages * limit;
    url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=${limit}&rating=${rating}&offset=${offset}`;
    getResults();
}
