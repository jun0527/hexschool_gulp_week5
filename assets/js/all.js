"use strict";

var nav = document.querySelectorAll('.js-nav li');
var main = document.querySelector('main');
var collapseBtn = document.querySelector('.js-collapseBtn');
var icon = document.querySelector('.js-icon'); //side menu active

function menuActive() {
  nav.forEach(function (item) {
    if (item.getAttribute('data-name') === item.getAttribute('data-current')) {
      item.setAttribute('class', 'nav-item px-6 mb-4 active');
    }
  });
}

menuActive(); //CKEditor 5 文字編輯器

if (main.getAttribute('class') === 'assignment') {
  ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
    console.log(editor);
  })["catch"](function (error) {
    console.error(error);
  });
} //view collapse按鈕


if (main.getAttribute('class') === 'admin') {
  collapseBtn.addEventListener('click', function (e) {
    if (icon.textContent === 'expand_more') {
      icon.textContent = 'expand_less';
    } else {
      icon.textContent = 'expand_more';
    }
  });
}
//# sourceMappingURL=all.js.map
