mocha.ui('tdd');


var assert = chai.assert;

mocha.run();

$(document.ready(function() {

    $("input[name ='referrer']").val(document.referrer);
   
  }));