const apiKey = '165993a2ca894c7ca8a367ab5b70cd73';
let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-20&sortBy=publishedAt&apiKey=${apiKey}`;
const main = document.querySelector('main');

window.addEventListener('load', e => {
    postNews();
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 

async function postNews() {
    const res = await fetch(url);
    const data = await res.json();
    main.innerHTML = data.articles.map(createArticle).join('\n');
}

function createArticle(article){
    return `
    <div class="card" style="width: 18rem; margin-top:5%">
  <img src="${article.urlToImage}" class="card-img-top" alt="${article.content}">
  <div class="card-body">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.description}</p>
    <a href="${article.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
}