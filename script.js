// seleziono elemento di container output
const outputCont = document.getElementById("container");

const overlay = document.getElementById("overlay");
const overlayImg = overlay.querySelector("img");
const overlayBtn = overlay.querySelector("button");

// creiamo ref a endpoint
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";



// creiamo la chiamata ajax all'endpoint
axios.get(endpoint)
    .then(response => {
        // otteniamo l'array di oggetti dall'API
        const posts = response.data;
        // console.log(posts);

        // var di accumulo stringa output
        let postsOutput = "";

        // cicliamo l'array per estrapolare le info
        posts.forEach((post, index) => {

            // destrutturiamo l'oggeto
            // const title = post.title;
            // const body = post.body;
            // const url = post.url;

            const { title, date, url, } = post;
            

            // valorizziamo la variabile di accumulo di output (stringa)
            postsOutput += `
            <div class="card">
                <img class="pin" src="img/pin.svg" alt="">
                <img src="${url}" alt="">
                <h2>${title}</h2>
                <p>${date}</p>
            </div>`;

        });

        // inseriamo in pagina le card accumulate
        outputCont.innerHTML = postsOutput;

        // AGGIUNGERE EVENTO CLICK A OGNI FOTO
        const cards = outputCont.getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            // selezioniamo direttamente la foto (seconda immagine della card)
            const img = cards[i].getElementsByTagName("img")[1];

            img.addEventListener("click", function() {
                overlayImg.src = img.src;
                overlay.style.display = "flex";
            });
        }

        // BOTTONE CHIUDI OVERLAY
        overlayBtn.addEventListener("click", function() {
            overlay.style.display = "none";
        });


    })
    .catch(error => console.error("Errore nella chiamata API:", error));




