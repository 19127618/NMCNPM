var infoSubnav = document.querySelector('.js-infoPage');
var passSubnav = document.querySelector('.js-passPage');
var avtSubnav = document.querySelector('.js-avtPage');

var infoPage = document.querySelector('.info-page');
var passPage = document.querySelector('.password-page');
var avtPage = document.querySelector('.avatar-page');

function f_show(page){
    f_hide(infoPage);
    f_hide(passPage);
    f_hide(avtPage);
    page.classList.add('element-flex--show');

}
function f_hide(page){
    page.classList.remove('element-flex--show');
}

f_show(infoPage)

infoSubnav.addEventListener('click',  function(){
    f_show(infoPage);
});
passSubnav.addEventListener('click', function(){
    f_show(passPage);
});
avtSubnav.addEventListener('click', function(){
    f_show(avtPage);
});