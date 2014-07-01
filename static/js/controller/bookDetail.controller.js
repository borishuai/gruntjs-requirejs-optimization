define(['render/bookDetail.render', 'model/bookDetail.model'],
  function (render, model) {
    'use strict';

    function _showBookDetail() {
      var bookName = 'Effective Java';
      model.getBookDetail(bookName, function(bookDetail) {console.log(render);
        render.renderDetail(bookDetail);
      });
    };

  
    var _init = function() {console.log(model);
      render.init(this);
      _showBookDetail();
    };

    return {
      init: _init
    };
});