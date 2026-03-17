function openMenu() {
    let principal = document.getElementsByClassName("principal")[0];
    let menuPage = document.getElementsByClassName("menu-page")[0];
    
    principal.style.display = "none";
    menuPage.style.display = "block";
}

function closeMenu() {
    let principal = document.getElementsByClassName("principal")[0];
    let menuPage = document.getElementsByClassName("menu-page")[0];
    
    principal.style.display = "block";
    menuPage.style.display = "none";
}