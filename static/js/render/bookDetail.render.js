define(['zepto', 'underscore'], function($, _) {
  'use strict';

  var $view, el, controller;
  
  function _renderDetail(book) {
    var detail = '<ul>';
    detail += '<li> Name: ' + book.name + '</li>';
    detail += '<li> Author: ' + book.author + '</li>';
    detail += '<li> Price: ' + book.price + '</li>';
    detail += '<li> Description: ' + book.description + '</li>';
    detail += '</li>';

    el.$bookDetail.html(detail);
  };

  function mapElements() {
    el = {
      $bookDetail: $view.find(".js-bookDetail")
    };
  };
  
  return {
    init: function(_controller) {
      controller = _controller;
      $view= $('.js-book');
      mapElements();
    },
    renderDetail: _renderDetail
  };
});