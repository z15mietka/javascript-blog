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