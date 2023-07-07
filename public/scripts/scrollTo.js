function scrollToID(targetID) {
   
    let e = document.getElementById(targetID);

    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });

}