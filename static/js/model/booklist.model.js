define([], function(url, util, constants, http) {
  'use strict';
  var bookList = [
    {
      name: "Java",
      price: 100
    },
    {
      name: "Java",
      price: 100
    },
    {
      name: "Java",
      price: 100
    },
    {
      name: "Java",
      price: 100
    },
    {
      name: "Java",
      price: 100
    },
    {
      name: "Java",
      price: 100
    }
  ];
  return {
    getBooklist: function(callback){
      callback(bookList);
    }
  }
});