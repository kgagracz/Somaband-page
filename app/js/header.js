const $navContainer = $('nav');
const $logo = $('.logo');
const $liContainer = $('.li-container li');

$navContainer.animate({
    'height': '80px'
},800, function () {
    $logo.animate({
        height:'70px'
    },200, function () {
        $navContainer.removeClass('nav-animation');
    });
});

console.log('testowy log');



