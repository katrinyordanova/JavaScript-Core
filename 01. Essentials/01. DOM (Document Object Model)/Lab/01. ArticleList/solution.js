function solve() {
    //take ids
    let createTitleElement=document.getElementById('createTitle');
    let createContentElement=document.getElementById('createContent');

    //take values from web
    let titleValue=createTitleElement.value;
    let contentValue=createContentElement.value;

    //don't allow blanks
    if (titleValue && contentValue) {
        //make title in h3 style
        let titleElement=document.createElement('h3');
        titleElement.textContent=titleValue;

        //make content in p
        let contentElement=document.createElement('p');
        contentElement.textContent=contentValue;

        //put elements in article tag
        let articleElement=document.createElement('article');
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        //add articles to DOM tree
        let articlesElement=document.getElementById('articles');
        articlesElement.appendChild(articleElement);

        //clear input
        createTitleElement.value='';
        createContentElement.value='';

    }
}