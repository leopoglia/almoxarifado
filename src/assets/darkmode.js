const html = document.querySelector('html');
const checkbox = document.querySelector('#mode');

if(localStorage.getItem('mode') == 'darkmode'){
    html.classList.add('darkmode');
    checkbox.checked = true;
} else {
    localStorage.setItem('mode', 'lightmode');
}

checkbox.addEventListener('change', function(){
    if(localStorage.getItem('mode') == 'lightmode'){
        localStorage.setItem('mode', 'darkmode');
    } else {
        localStorage.setItem('mode', 'lightmode');
    }
    html.classList.toggle('darkmode');
})