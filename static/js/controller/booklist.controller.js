define(['render/booklist.render', 'model/booklist.model'],
  function (render, model) {
    'use strict';

    function _showBooklist() {
      model.getBooklist(function(booklist) {console.log(1);
        render.renderList(booklist);
      });
    };

  
    var _init = function() {console.log(model);
      render.init(this);
      _showBooklist();
    };

    return {
      init: _init
    };
});