// ==UserScript==
// @name Wikidata Links Enhancer
// @namespace maxlath
// @description displays wikidata links under any wikimedia projects pages
// @include *.wikipedia.org/*
// @include *.wikisource.org/*
// @include *.wikiquote.org/*
// @include *.wikimedia.org/*
// @version 1
// @grant none
// ==/UserScript==


var getLink = function () {
  return $('a').filter(function (index) {
    return /wikidata.org\/wiki\/Q/.test($(this).attr('href'))
  }).first().attr('href');
};

var extractWikidataId = function (href) {
  return href.split('wikidata.org/wiki/')[1]
};

var addLinkAfterHeader = function (href) {
  if (href) {
    var id = extractWikidataId(href);
    console.log('wikidata link found', href, id);
    $el = $(document.createElement('a')).attr('href', href).text(id);
    $('h1').next().prepend($el);
  }
};

// after DOM ready, get link and add it under the page h1
$(function () {
  addLinkAfterHeader(getLink())
});