
let animElemets1 = document.querySelectorAll('.my-anim-left');
if (animElemets1.length > 0) {
    for (let i = 0; i < animElemets1.length; i++) {
        let item = animElemets1[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left')
        })
        myAnimScroll(item, 'activ-anim-left');
    }
}



let animElemets2 = document.querySelectorAll('.my-anim-right');

if (animElemets2.length > 0) {
    for (let i = 0; i < animElemets2.length; i++) {
        let item = animElemets2[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right')
        })
        myAnimScroll(item, 'activ-anim-right');
    }
}


let animElemets3 = document.querySelectorAll('.my-anim-top');

if (animElemets3.length > 0) {
    for (let i = 0; i < animElemets3.length; i++) {
        let item = animElemets3[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-top')
        })
        myAnimScroll(item, 'activ-anim-top');
    }
}

let animElemets4 = document.querySelectorAll('.my-anim-bottom');
if (animElemets4.length > 0) {
    for (let i = 0; i < animElemets4.length; i++) {
        let item = animElemets4[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-bottom')
        })
        myAnimScroll(item, 'activ-anim-bottom');
    }
}


// робочі функціїї
function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

}

window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}