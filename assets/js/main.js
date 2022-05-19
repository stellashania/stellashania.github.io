// open and close mobile navbar
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


// remove mobile menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// history tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('history_active')
        })

        target.classList.add('history_active')

        tabs.forEach(tab =>{
            tab.classList.remove('history_active')
        })

        tab.classList.add('history_active')
    })
})



// portfolio modal
const modalViews = document.querySelectorAll('.portfolio_modal'),
    modalButtons = document.querySelectorAll('.portfolio_button'),
    modalCloses = document.querySelectorAll('.portfolio_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})



// SLIDERS
// slider 1
const myslide1 = document.querySelectorAll('.slider1'),
    dot1 = document.querySelectorAll('.dot1');

let counter1 = 1;
slideslider1(counter1);

// let timer = setInterval(autoslide, 8000);

// function autoslide(){
//     counter1 += 1;
//     slideslider(counter1);
// }

function plusSlides1(n){
    counter1 += n;
    slideslider1(counter1);
    // resetTimer();
}

function currentSlide1(n){
    counter1 = n;
    slideslider1(counter1);
    // resetTimer();
}

// function resetTimer(){
//     clearInterval(timer);
//     timer = setInterval(autoslide, 8000);
// }

function slideslider1(n){
    let i;

    for(i = 0; i < myslide1.length; i++){
        myslide1[i].style.display = "none";
    }

    for(i = 0; i < dot1.length; i++){
        dot1[i].classList.remove('dot_active');
    }

    if(n > myslide1.length){
        counter1 = 1;
    }

    if(n < 1){
        counter1 = myslide1.length;
    }

    myslide1[counter1 - 1].style.display = "block";
    dot1[counter1 - 1].classList.add('dot_active');
}

// slider 2
const myslide2 = document.querySelectorAll('.slider2'),
    dot2 = document.querySelectorAll('.dot2');

let counter2 = 1;
slideslider2(counter2);

function plusSlides2(n){
    counter2 += n;
    slideslider2(counter2);
}

function currentSlide2(n){
    counter2 = n;
    slideslider2(counter2);
}

function slideslider2(n){
    let i;

    for(i = 0; i < myslide2.length; i++){
        myslide2[i].style.display = "none";
    }

    for(i = 0; i < dot2.length; i++){
        dot2[i].classList.remove('dot_active');
    }

    if(n > myslide2.length){
        counter2 = 1;
    }

    if(n < 1){
        counter2 = myslide2.length;
    }

    myslide2[counter2 - 1].style.display = "block";
    dot2[counter2 - 1].classList.add('dot_active');
}

// slider 3
const myslide3 = document.querySelectorAll('.slider3'),
    dot3 = document.querySelectorAll('.dot3');

let counter3 = 1;
slideslider3(counter3);

function plusSlides3(n){
    counter3 += n;
    slideslider3(counter3);
}

function currentSlide3(n){
    counter3 = n;
    slideslider3(counter3);
}

function slideslider3(n){
    let i;

    for(i = 0; i < myslide3.length; i++){
        myslide3[i].style.display = "none";
    }

    for(i = 0; i < dot3.length; i++){
        dot3[i].classList.remove('dot_active');
    }

    if(n > myslide3.length){
        counter3 = 1;
    }

    if(n < 1){
        counter3 = myslide3.length;
    }

    myslide3[counter3 - 1].style.display = "block";
    dot3[counter3 - 1].classList.add('dot_active');
}

// slider 4
const myslide4 = document.querySelectorAll('.slider4'),
    dot4 = document.querySelectorAll('.dot4');

let counter4 = 1;
slideslider4(counter4);

function plusSlides4(n){
    counter4 += n;
    slideslider4(counter4);
}

function currentSlide4(n){
    counter4 = n;
    slideslider4(counter4);
}

function slideslider4(n){
    let i;

    for(i = 0; i < myslide4.length; i++){
        myslide4[i].style.display = "none";
    }

    for(i = 0; i < dot4.length; i++){
        dot4[i].classList.remove('dot_active');
    }

    if(n > myslide4.length){
        counter4 = 1;
    }

    if(n < 1){
        counter4 = myslide4.length;
    }

    myslide4[counter4 - 1].style.display = "block";
    dot4[counter4 - 1].classList.add('dot_active');
}

// slider 5
const myslide5 = document.querySelectorAll('.slider5'),
    dot5 = document.querySelectorAll('.dot5');

let counter5 = 1;
slideslider5(counter5);

function plusSlides5(n){
    counter5 += n;
    slideslider5(counter5);
}

function currentSlide5(n){
    counter5 = n;
    slideslider5(counter5);
}

function slideslider5(n){
    let i;

    for(i = 0; i < myslide5.length; i++){
        myslide5[i].style.display = "none";
    }

    for(i = 0; i < dot5.length; i++){
        dot5[i].classList.remove('dot_active');
    }

    if(n > myslide5.length){
        counter5 = 1;
    }

    if(n < 1){
        counter5 = myslide5.length;
    }

    myslide5[counter5 - 1].style.display = "block";
    dot5[counter5 - 1].classList.add('dot_active');
}

// slider 6
const myslide6 = document.querySelectorAll('.slider6'),
    dot6 = document.querySelectorAll('.dot6');

let counter6 = 1;
slideslider6(counter6);

function plusSlides6(n){
    counter6 += n;
    slideslider6(counter6);
}

function currentSlide6(n){
    counter6 = n;
    slideslider6(counter6);
}

function slideslider6(n){
    let i;

    for(i = 0; i < myslide6.length; i++){
        myslide6[i].style.display = "none";
    }

    for(i = 0; i < dot6.length; i++){
        dot6[i].classList.remove('dot_active');
    }

    if(n > myslide6.length){
        counter6 = 1;
    }

    if(n < 1){
        counter6 = myslide6.length;
    }

    myslide6[counter6 - 1].style.display = "block";
    dot6[counter6 - 1].classList.add('dot_active');
}

// slider 7
const myslide7 = document.querySelectorAll('.slider7'),
    dot7 = document.querySelectorAll('.dot7');

let counter7 = 1;
slideslider7(counter7);

function plusSlides7(n){
    counter7 += n;
    slideslider7(counter7);
}

function currentSlide7(n){
    counter7 = n;
    slideslider7(counter7);
}

function slideslider7(n){
    let i;

    for(i = 0; i < myslide7.length; i++){
        myslide7[i].style.display = "none";
    }

    for(i = 0; i < dot7.length; i++){
        dot7[i].classList.remove('dot_active');
    }

    if(n > myslide7.length){
        counter7 = 1;
    }

    if(n < 1){
        counter7 = myslide7.length;
    }

    myslide7[counter7 - 1].style.display = "block";
    dot7[counter7 - 1].classList.add('dot_active');
}

// slider 8
const myslide8 = document.querySelectorAll('.slider8'),
    dot8 = document.querySelectorAll('.dot8');

let counter8 = 1;
slideslider8(counter8);

function plusSlides8(n){
    counter8 += n;
    slideslider8(counter8);
}

function currentSlide8(n){
    counter8 = n;
    slideslider8(counter8);
}

function slideslider8(n){
    let i;

    for(i = 0; i < myslide8.length; i++){
        myslide8[i].style.display = "none";
    }

    for(i = 0; i < dot8.length; i++){
        dot8[i].classList.remove('dot_active');
    }

    if(n > myslide8.length){
        counter8 = 1;
    }

    if(n < 1){
        counter8 = myslide8.length;
    }

    myslide8[counter8 - 1].style.display = "block";
    dot8[counter8 - 1].classList.add('dot_active');
}

// slider 9
const myslide9 = document.querySelectorAll('.slider9'),
    dot9 = document.querySelectorAll('.dot9');

let counter9 = 1;
slideslider9(counter9);

function plusSlides9(n){
    counter9 += n;
    slideslider9(counter9);
}

function currentSlide9(n){
    counter9 = n;
    slideslider9(counter9);
}

function slideslider9(n){
    let i;

    for(i = 0; i < myslide9.length; i++){
        myslide9[i].style.display = "none";
    }

    for(i = 0; i < dot9.length; i++){
        dot9[i].classList.remove('dot_active');
    }

    if(n > myslide9.length){
        counter9 = 1;
    }

    if(n < 1){
        counter9 = myslide9.length;
    }

    myslide9[counter9 - 1].style.display = "block";
    dot9[counter9 - 1].classList.add('dot_active');
}

// slider 10
const myslide10 = document.querySelectorAll('.slider10'),
    dot10 = document.querySelectorAll('.dot10');

let counter10 = 1;
slideslider10(counter10);

function plusSlides10(n){
    counter10 += n;
    slideslider10(counter10);
}

function currentSlide10(n){
    counter10 = n;
    slideslider10(counter10);
}

function slideslider10(n){
    let i;

    for(i = 0; i < myslide10.length; i++){
        myslide10[i].style.display = "none";
    }

    for(i = 0; i < dot10.length; i++){
        dot10[i].classList.remove('dot_active');
    }

    if(n > myslide10.length){
        counter10 = 1;
    }

    if(n < 1){
        counter10 = myslide10.length;
    }

    myslide10[counter10 - 1].style.display = "block";
    dot10[counter10 - 1].classList.add('dot_active');
}

// slider 11
const myslide11 = document.querySelectorAll('.slider11'),
    dot11 = document.querySelectorAll('.dot11');

let counter11 = 1;
slideslider11(counter11);

function plusSlides11(n){
    counter11 += n;
    slideslider11(counter11);
}

function currentSlide11(n){
    counter11 = n;
    slideslider11(counter11);
}

function slideslider11(n){
    let i;

    for(i = 0; i < myslide11.length; i++){
        myslide11[i].style.display = "none";
    }

    for(i = 0; i < dot11.length; i++){
        dot11[i].classList.remove('dot_active');
    }

    if(n > myslide11.length){
        counter11 = 1;
    }

    if(n < 1){
        counter11 = myslide11.length;
    }

    myslide11[counter11 - 1].style.display = "block";
    dot11[counter11 - 1].classList.add('dot_active');
}

// slider 12
const myslide12 = document.querySelectorAll('.slider12'),
    dot12 = document.querySelectorAll('.dot12');

let counter12 = 1;
slideslider12(counter12);

function plusSlides12(n){
    counter12 += n;
    slideslider12(counter12);
}

function currentSlide12(n){
    counter12 = n;
    slideslider12(counter12);
}

function slideslider12(n){
    let i;

    for(i = 0; i < myslide12.length; i++){
        myslide12[i].style.display = "none";
    }

    for(i = 0; i < dot12.length; i++){
        dot12[i].classList.remove('dot_active');
    }

    if(n > myslide12.length){
        counter12 = 1;
    }

    if(n < 1){
        counter12 = myslide12.length;
    }

    myslide12[counter12 - 1].style.display = "block";
    dot12[counter12 - 1].classList.add('dot_active');
}



// scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// change background header
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// show scroll
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


// theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


// activate or deactivate the theme with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



