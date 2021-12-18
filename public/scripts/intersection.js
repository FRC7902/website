let menuItem1 = document.querySelector(".menuItem1")
let menuItem2 = document.querySelector(".menuItem2")
let menuItem3 = document.querySelector(".menuItem3")
let menuItem4 = document.querySelector(".menuItem4")
let menuItem5 = document.querySelector(".menuItem5")
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let section3 = document.querySelector(".section3")
let section4 = document.querySelector(".section4")
let section5 = document.querySelector(".section5")

const options = {
    threshold: 0.35
}

const sectionObserver1 = new IntersectionObserver(function(entries, sectionObserver1) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuItem1.classList.add("menu-item-visible");
        } else {
            menuItem1.classList.remove("menu-item-visible")
        }
    })
}, options)
const sectionObserver2 = new IntersectionObserver(function(entries, sectionObserver1) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuItem2.classList.add("menu-item-visible");
        } else {
            menuItem2.classList.remove("menu-item-visible")
        }
    })
}, options)
const sectionObserver3 = new IntersectionObserver(function(entries, sectionObserver1) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuItem3.classList.add("menu-item-visible");
        } else {
            menuItem3.classList.remove("menu-item-visible")
        }
    })
}, options)
const sectionObserver4 = new IntersectionObserver(function(entries, sectionObserver1) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuItem4.classList.add("menu-item-visible");
        } else {
            menuItem4.classList.remove("menu-item-visible")
        }
    })
}, options)
const sectionObserver5 = new IntersectionObserver(function(entries, sectionObserver1) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            menuItem5.classList.add("menu-item-visible");
        } else {
            menuItem5.classList.remove("menu-item-visible")
        }
    })
}, options)

sectionObserver1.observe(section1)
sectionObserver2.observe(section2)
sectionObserver3.observe(section3)
sectionObserver4.observe(section4)
sectionObserver5.observe(section5)