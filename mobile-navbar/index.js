let toggler = document.querySelector('.icon')

toggler.addEventListener('click', () => {
    let x = document.querySelector('#myLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
})