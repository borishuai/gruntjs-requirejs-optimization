define(['zepto', 'underscore'], function($, _) {
  'use strict';

  var $view, el, controller;
  
  function _renderList(rData) {
    var list = '<ul>';
    _.each(rData, function(book) {
      list += '<li>' + book.name + ', ' + book.price + '</li>';
    });
    list += '</ul>';
    console.log(rData);
    el.$booklist.html(list);
  };

  function mapElements() {
    el = {
      $booklist: $view.find(".js-booklist")
    };
  };
  
  return {
    init: function(_controller) {
      controller = _controller;
      $view= $('.js-book');
      mapElements();
    },
    renderList: _renderList
  };
});