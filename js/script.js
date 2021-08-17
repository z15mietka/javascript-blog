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

// generateTitleLinks

const generateTitleLinks = function (customSelector = '') {
    console.log('customSelector: ', customSelector);

      /* remove contents of titleList */
      const titleList = document.querySelector(opt.titleListSelector);
      console.log('titleList: ', titleList);
      titleList.innerHTML = '';
    
      /* for each article */
      const articles = document.querySelectorAll(opt.articleSelector + customSelector);
      console.log('articles: ', articles);
    
      let html = '';
    
      for(let article of articles){
      console.log('article: ', article);
      }
    
      /* get the article id */
      const articleId = article.getAttribute ('id');
      console.log('articleId: ', articleId);

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(opt.titleSelector).innerHTML;
    console.log('articleTitle: ', articleTitle);

    /* create HTML of the link */
    const linkHTMLData = {id: articleId, title: articleTitle};
    const linkHTML = templates.articleLink(linkHTMLData);
    //const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML article: ', linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
    console.log('html: ', html);

    /* insertAdjacentHTML into titleList
    titleList.insertAdjacentHTML('afterend', linkHTML);
    console.log('insertAdjacentHTML titleList: ', titleList);*/
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log('links= ', links);

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();
