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
        tags: ['Geo', 'Tech'],
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi.',
        author: 'pubblicato da Fabio Mari',
        published: 'in data 14/03/2023',
        image: './assets/images/deep-sea.jpg',
        imageDescription: 'A picture of the bottom of the sea',
        tags: ['Viaggi', 'Geo'],
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        author: 'pubblicato da Marta Bianchi',
        published: 'in data 20/04/2023',
        image: './assets/images/kitchen-food.jpg',
        imageDescription: 'A picture of tomatoes, a knife, oil and some herbs',
        tags: 'Cucina',
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste ad artisti emergenti.",
        author: 'pubblicato da Gabriele Neri',
        published: 'in data 29/05/2023',
        image: './assets/images/modern-art.jpg',
        imageDescription: 'A picture of a wall with various wall paintings',
        tags: ['Arte', 'Tech'],
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

    // create a post item
    const postMarkup = `
        <div class="post">
            <div class="post-body">
                <h3>${title}</h3> <span><i class="fa-regular fa-bookmark fa-xl"></i></span>
                <div class="post-author">${author}</div>
                <div class="post-date">${published}</div>
                <p class="post-content">${content}</p>
                <img class="post-image" src='${image}' alt='${imageDescription}'></img>
                <div class="post-tags">
                    <label for="tags">${tags}</label>
                </div>
            </div>
        </div>
        `
    // console.log(postMarkup);

    postsRowEl.insertAdjacentHTML('beforeend', postMarkup);
})



// add click to the bookmark
//let clickableSavedBookmark = document.querySelectorAll('.fa-bookmark');
let clickableSavedBookmark = document.querySelector('.fa-bookmark');
    // console.log(clickableSavedBookmark);

/*     clickableSavedBookmark.forEach(savedBookmark => {

        console.log(savedBookmark); */

    /**
     * 
     * @param 
     */
    clickableSavedBookmark.addEventListener('click', function(e){
        // console.log('clicked');
        let bookmark = document.querySelector('i');
        // console.log(bookmark);
        bookmark.className = 'fa-solid fa-bookmark fa-xl';
        // console.log(bookmark.className);
    })

/*     }) */


// apply the saved filter
/* let checkMark = clickableSavedBookmark;

const check = checkMark.filter((checkBookmark) => {
    if (checkBookmark === `fa-solid fa-bookmark fa-xl`) {
        return true;
    }
    return false;
});
console.log(check); */



const selectElement = document.querySelector(".filter");
//const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  //result.textContent = `You like ${event.target.value}`;
  // console.log(`${event.target.value}`);
  console.log(event);
  console.log(`${event.target.value}`);


  const filteredPosts = postsFeed.filter(filteredPost => {
    return filteredPost.tags === `${event.target.value}` || event.target.value === 'all'
  })


  console.log(filteredPosts);


  postsRowEl.innerHTML = ''

  RenderPost(filteredPosts, postsRowEl);

})
// 1h40 25/11 array prendere i singoli elementi ---> mettere i vari value in array?

/**
 * Renders a list of iconst into the dom element provided
 * @param {Array} iconsList A an of icons objects
 * @param {object} domElement the node where append all icons
 */
/* function renderPost(iconsList, domElement) {
    iconsList.forEach(icon => {
      //console.log(icon);
  
      const iconEl = generateIcon(icon)
      //console.log(iconEl);
  
      domElement.appendChild(iconEl)
  
    })
  } */