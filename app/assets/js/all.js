const nav = document.querySelectorAll('.js-nav li');
const main = document.querySelector('main');
const collapseBtn = document.querySelector('.js-collapseBtn');
const icon = document.querySelector('.js-icon');

//side menu active
function menuActive() {
  nav.forEach((item) => {
    if (item.getAttribute('data-name') === item.getAttribute('data-current')) {
      console.log(item);
      item.setAttribute('class', 'nav-item px-6 mb-4 active');
    }
  })
}
menuActive();
//CKEditor 5 文字編輯器
if (main.getAttribute('class') === 'assignment') {
  ClassicEditor
    .create(document.querySelector( 
            '#editor'))
    .then(editor=>{
          console.log(editor);
    })
    .catch(error=>{
          console.error(error);
    });
}

//view collapse按鈕
if (main.getAttribute('class') === 'admin') {
  collapseBtn.addEventListener('click', (e) => {
    if (icon.textContent === 'expand_more') {
      icon.textContent = 'expand_less';
    } else {
      icon.textContent = 'expand_more';
    }
  })
}