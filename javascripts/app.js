var main = function () {
  "use strict";

  var url = "https://api.linkedin.com/v1/people/~?format=json"

  $.getJSON(url, function (linkedInResponse) {
    console.log(linkedInResponse);
  });

};

$(document).ready(main);
