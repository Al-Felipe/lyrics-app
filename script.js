// Variaveis
const btnEl = document.querySelector("#btn");
const nomArtista = document.querySelector("#nom-Artista");
const nomMusica = document.querySelector("#nom-Musica");
const lyricsContainer = document.querySelector(".lyrics-container");
const imgEl = document.querySelector("#album-cover");
const anchorEl = document.querySelector("a");

//Evento
btnEl.addEventListener("click", searchLyric);

//Funcoes
async function searchLyric() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ee62ab72fmsh5311cd2e221f00dp1fb5b3jsn54be4ca3fe45",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  btnEl.innerText = "Carregando";

  const response = await fetch(
    `https://shazam.p.rapidapi.com/search?term=${nomArtista.value}${nomMusica.value}&locale=en-US&offset=0&limit=5`,
    options
  );
  const data = await response.json();

  btnEl.innerText = "Buscar";
  showCoverImg(data);
  getLyric(data);
}

function showCoverImg(data) {
  lyricsContainer.style.display = "block";
  lyricsContainer.style.display = "flex";
  imgEl.src = data.tracks.hits[0].track.images.coverart;
}

function getLyric(data) {
  anchorEl.href = `${data.tracks.hits[0].track.url}`;
}
