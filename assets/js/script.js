// console.log('Hello, world!');

// objects with posts content
const postsFeed = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Un breve articolo sulla scoperta di una specie di papera di gomma mai vista prima.',
        author: 'pubblicato da Diana Rossi',
        published: 'in data 11/02/2023',
        image: './assets/images/rubber-duck.jpg',
        imageDescription: 'A picture of a big rubber duck floating in the Hudson river',
        tags: ['geo', 'tech'],
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi.',
        author: 'pubblicato da Fabio Mari',
        published: 'in data 14/03/2023',
        image: './assets/images/deep-sea.jpg',
        imageDescription: 'A picture of the bottom of the sea',
        tags: ['viaggi', 'geo'],
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        author: 'pubblicato da Marta Bianchi',
        published: 'in data 20/04/2023',
        image: './assets/images/kitchen-food.jpg',
        imageDescription: 'A picture of tomatoes, a knife, oil and some herbs',
        tags: ['cucina'],
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste ad artisti emergenti.",
        author: 'pubblicato da Gabriele Neri',
        published: 'in data 29/05/2023',
        image: './assets/images/modern-art.jpg',
        imageDescription: 'A picture of a wall with various wall paintings',
        tags: ['arte', 'tech'],
    },
]

//console.log(postsFeed);



// variable with for loop to create posts
const postsRowEl = document.querySelector('.posts .row');


postsFeed.forEach(post => {
    console.log(post);
    const { id, title, content, author, published, image, imageDescription, tags } = post

    console.log(id, title, content, author, published, image, imageDescription, tags);
    // console.log(isChecked(product));

    // create a product item
    const postMarkup = `
        <div class="post">
            <div class="post-body">
                <h3>${title}</h3> <span><i class="fa-regular fa-bookmark fa-xl"></i></span>
                <div class="post-author">${author}</div>
                <div class="post-date">${published}</div>
                <p class="post-content">${content}</p>
                <img class="post-image" src='${image}' alt='${imageDescription}'></img>
                <div class="post-tags">
                    <button class="btn">${tags}</button>
                </div>
            </div>
        </div>
        `
    // console.log(postMarkup);

    postsRowEl.insertAdjacentHTML('beforeend', postMarkup);
})

// click
let clickableSavedBookmark = document.querySelector('.fa-bookmark');
    // console.log(clickableSavedBookmark);

clickableSavedBookmark.addEventListener('click', function(){
    // console.log('clicked');
    let bookmark = document.querySelector('i');
    // console.log(bookmark);
    bookmark.className = 'fa-solid fa-bookmark fa-xl';
    // console.log(bookmark.className);
})


/* // get the select value --¡But it gives me just the "all" value!
document.getElementById('tags').value

console.log(document.getElementById('tags').value);

// prove - lezione biglietto treno form correzione 25.11.2023

// const tagFilterElement = document.getElementById('tags');
const geoTagElement = document.getElementById('geo');
console.log(geoTagElement);

tagFilterElement.addEventListener('click', function(){
    console.log('clicked');
});

document.querySelector('select').addEventListener('change', ) */

const selectElement = document.querySelector(".filter");
//const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  //result.textContent = `You like ${event.target.value}`;
  console.log(`${event.target.value}`);
})
// 1h40 25/11 array prendere i singoli elementi ---> mettere i vari value in array?