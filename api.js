var diziler = ["tt1475582", "tt7660850", "tt2306299"];

function getAll() {
  for (i = 0; i < diziler.length; i++) {
    var baseUrl = "https://api.themoviedb.org/3/find/";
    var apiURL =
      "?api_key=a17f05cd5f65cb1c01a737796e11bb39&language=en-US&external_source=imdb_id";
    var url = baseUrl + diziler[i] + apiURL;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (this.status === 200) {
        var posts = JSON.parse(this.responseText);

        var post = posts.tv_results;
      }
      html = "";

      var imageURL =
        "http://image.tmdb.org/t/p/original" + post[0].backdrop_path;

      html += `
    
            
            <div class="row align-items card">
            <img class="card-img-top" src="${imageURL}" alt="Card image cap">
               <div class="card-body card-suc">
               <p class="card-text">${post[0].name}</p>
               <p "class="card-text">IMDB Puanı : ${post[0].vote_average}</p>
             </div>
            
            
            `;

      document.querySelector("#dizi").innerHTML += html;
    };

    xhr.send();
  }
}

getAll();
