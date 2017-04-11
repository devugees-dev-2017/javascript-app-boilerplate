function initialize(event) {
  onClick('.numberButton', function (event) {
    console.log(event.target.textContent)
  });

  onClick('.numberButton', function (event) {
    console.log(event.target.className)
  });
}


function onClick(selector = '', callBack = () => { }) {
  var elementList = Array.from(document.querySelectorAll(selector));
  elementList.forEach(function (element) {
    if (element.onclick != null) {
      var ch = element.onclick;
      element.addEventListener('click', function () { ch(); callBack(); });
    }
    else
      element.addEventListener('click', callBack);
  }, this);
}

document.addEventListener('DOMContentLoaded', initialize, false);