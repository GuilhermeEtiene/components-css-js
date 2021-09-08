let sidebar = document.querySelector('#mySideNav');
let mainContent = document.querySelector('#main');

function openNav(){
    sidebar.style.width = "250px";
    mainContent.style.marginLeft = "250px";
}

function closeNav(){
    sidebar.style.width = "0px";
    mainContent.style.marginLeft = "0px";
}