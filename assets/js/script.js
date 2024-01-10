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


for (let i = 0; i < postsFeed.length; i++) {
    const post = postsFeed[i];

    const postMarkup = `
        <div class="post">
            <div class="post-body">
                <h3>${post.title}</h3> <span><i class="fa-solid fa-bookmark fa-xl"></i></span>
                <div class="post-author">${post.author}</div>
                <div class="post-date">${post.published}</div>
                <p class="post-content">${post.content}</p>
                <img class="post-image" src='${post.image}' alt='${post.imageDescription}'></img>
                <div class="post-tags">
                    <button class="btn">${post.tags}</button>
                </div>
            </div>
        </div>
        `
    //print posts on page
    postsRowEl.insertAdjacentHTML('beforeend', postMarkup);

}