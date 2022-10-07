function activeMenuItem(activeItem) {

    var activeID = "menuAbout";
    switch (activeItem) {
        case "about":
            activeID = "menuAbout";

            break;

        case "sponsors":
            activeID = "menuSponsors";
            break;

        case "resources":
            activeID = "menuResources";
            break;

        case "contact":
            activeID = "menuContact";
            break;

        case "join":
            activeID = "menuJoin";
            break;
        default:
            activeID = null;
    }


    var menuElement = document.getElementById("menuAbout");

    document.getElementById("menuAbout");
    console.log(menuElement);

    menuElement.classList.add("menu-item-active");

}