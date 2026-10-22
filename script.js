function openMenu() {
    document.body.classList.add("menu--open");
    document.querySelector(".btn__menu[aria-controls='mobile-menu']")
        .setAttribute("aria-expanded", "true");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    document.querySelector(".btn__menu[aria-controls='mobile-menu']")
        .setAttribute("aria-expanded", "false");
}