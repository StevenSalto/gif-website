const SEARCH_BAR= document.querySelector("#searchBar")
const BTN = document.querySelector("#submitButton")
const GIF_SECTION = document.querySelector("#gifSection")
const API_KEY = 'z9qEJKCAcrrMCA7q77qHJXLDkv111Kra';

let searchPhrase = 'naruto';
let limit = 9;
let rating = 'g';

let url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=${limit}&rating=${rating}`;

async function getResults() {
    let resp =  await fetch(url);
    let response =  await resp.json();
    console.log(response);
    GIF_SECTION.innerHTML = `<img src="${response.data[1].images.original.url}">`
}
