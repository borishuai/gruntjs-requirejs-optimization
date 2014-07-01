define(function() {
  'use strict';
  var books = {
    "Effective Java": {
      name: "Effective Java",
      author: "Joshua Bloch",
      price: 50,
      description: "Are you looking for a deeper understanding of the Java™ programming language so that you can write code that is clearer, more correct, more robust, and more reusable? Look no further! Effective Java™, Second Edition, brings together seventy-eight indispensable programmer’s rules of thumb: working, best-practice solutions for the programming challenges you encounter every day."
    },
    "JavaScript: The Good Parts": {
      name: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      price: 46,
      description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including:"
    }
  };
  return {
    getBookDetail: function(bookName, callback){
      var bookDetail = books[bookName];
      callback(bookDetail);
    }
  }
});