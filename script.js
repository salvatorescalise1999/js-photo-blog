// seleziono elemento di container output
const outputCont = document.getElementById("container");
// console.log(outputCont);

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
                <img src="${url}" alt="">
                <h2>${title}</h2>
                <p>${date}</p>
            </div>`;

            console.log("alla iterazione numero", index, postsOutput);

        });

        // inseriamo in pagina le card accumulate
        outputCont.innerHTML = postsOutput;


    })
    .catch()




