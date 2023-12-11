let btn = document.querySelector('nav .btn');
let sidebar = document.querySelector('.sidebar');

function openSidebar ( ) {
    sidebar.classList.add(`active`);
}

btn.addEventListener (`click`, openSidebar )


// *CLOSE SIDEBAR 

let crossBtn = document.querySelector(`.crossBtn`);


function closeSidebar ( event) {
    if (event.target.classList.contains(`sidebar`) || event.target.classList.contains(`crossBtn`)) {
        sidebar.classList.remove(`active`);
    }  
}


sidebar.addEventListener(`click` , closeSidebar )

crossBtn.addEventListener(`click` , closeSidebar )


// *DARKMODE

let btnDarkMode = document.querySelector(`.darkModeBtn`);
let body = document.querySelector(`body`);
let heading = document.querySelector(`.darkModeCnt .wrapper h3`);

function setDarkMode () {
    body.classList.toggle(`darkMode`);

    if (body.classList.contains(`darkMode`)) {
        heading.innerHTML = `Dark Mode`;
    } else {
        heading.innerHTML = `Light Mode`;   
    }
}

btnDarkMode.addEventListener(`click` , setDarkMode)
