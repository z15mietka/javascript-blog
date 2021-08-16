{
    'use strict';
    
    const templates = {
      articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
      tagArticleLink: Handlebars.compile(document.querySelector('#template-tag-article-link').innerHTML),
      authorArticleLink: Handlebars.compile(document.querySelector('#template-author-article-link').innerHTML),
      tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
      authorSidebarLink: Handlebars.compile(document.querySelector('#template-author-sidebar-link').innerHTML)
    }
    
    const opt = {
      articleSelector: '.post',
      titleSelector: '.post-title',
      titleListSelector: '.titles',
      articleTagsSelector: '.post-tags .list',
      articleAuthorSelector: '.post-author',
      tagsListSelector: '.tags.list',
      authorsListSelector: '.authors.list',
      cloudClassCount: 5,
      cloudClassPrefix: 'tag-size-'
    };
    
    
    
    
// titleClickHandler
    
const titleClickHandler = function(event){
event.preventDefault();
const clickedElement = this;
console.log('Link was clicked!');
    
/* remove class 'active' from all article links  */
 const activeLinks = document.querySelectorAll('.titles a.active');
    
for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
}

/* add class 'active' to the clicked link */
clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

/* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts article.active');

for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

/* get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute ('href');
console.log(articleSelector);

/* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelector);
console.log(targetArticle);

/*  add class 'active' to the correct article */
targetArticle.classList.add('active');
}