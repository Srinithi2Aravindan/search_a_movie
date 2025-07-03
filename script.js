let api = "https://www.omdbapi.com/?i=tt3896198&apikey=3a244322&t=";

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let genre = document.querySelector('#genre');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#boxoffice');
let language = document.querySelector('#languages');
let poster = document.querySelector('#poster');
let imdb = document.querySelector('#imdb');
let container = document.querySelector('#container');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion')

container.classList.add('hidden')

function search() {
    let movieName = document.querySelector("#movieName").value;
    let query = api + movieName;
    fetch(query).then((data)=>
    {
        return data.json();
    }).then((data)=> {
        
        if(data.Error === 'Movie not found!')
        {
            error.innerText = "Movie not Found!"
        }

        else{
        
        error.style.display = 'none' ;
        container.classList.remove('hidden');
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        directors.innerText = data.Director;
        awards.innerText = data.Awards;
        collection.innerText = data.BoxOffice;
        language.innerText = data.Language;
        poster.src = data.Poster;
        imdb.innerText = data.imdbRating;
        if(data.imdbRating >= 7)
        {
            suggestion.innerText = "Worth Watching"
            suggestion.style.color = "green"
        }
        else if(data.imdbRating > 6 && data.imdbRating<7)
        {
            suggestion.innerText = "Can Watch"
            suggestion.style.color = "orange"
        }
        else{
            suggestion.innerText = "Waste"
            suggestion.style.color = "red"
        }
        }

    })

}
