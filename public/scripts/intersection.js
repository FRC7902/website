const options = {
    rootMargin: '0px',
    threshold: 0.4
}

var observer = new IntersectionObserver(observerCallback, options);

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        // in view
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__animated')

            // sponsor logos
            if (entry.target.classList.contains('logo')) {
                if (!(entry.target.classList.contains('animate__fadeIn'))) {
                    entry.target.classList.add('animate__fadeIn')
                }
            }
            // sponsor tier headings
            if (entry.target.classList.contains('sponsor-heading-1')) {
                if (!(entry.target.classList.contains('animate__fadeInLeft'))) {
                    entry.target.classList.remove('animate__fadeOut')
                    entry.target.classList.add('animate__fadeInLeft')
                }
            }
            // about page content sections
            if (entry.target.classList.contains('timeline-content')) {
                if (entry.target.classList.contains('animate__fadeOut')) {
                    entry.target.classList.remove('animate__fadeOut')
                }
                if (!(entry.target.classList.contains('animate__fadeIn'))) {
                    entry.target.classList.add('animate__fadeIn')
                }
            }

        }
        // out of view
        else {
            // sponsor tier headings
            if (entry.target.classList.contains('sponsor-heading-1')) {
                if (entry.target.classList.contains('animate__fadeInLeft')) {
                    entry.target.classList.remove('animate__fadeInLeft')
                    entry.target.classList.add('animate__fadeOut')
                }
            }
            // about page content sections
            if (entry.target.classList.contains('timeline-content')) {
                if (entry.target.classList.contains('animate__fadeIn')) {
                    entry.target.classList.remove('animate__fadeIn')
                }
                if (!(entry.target.classList.contains('animate__fadeOut'))) {
                    entry.target.classList.add('animate__fadeOut')
                }
            }
        }
    });
};

window.onload = function() {
    document.querySelectorAll('.logo-fade').forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });

    document.querySelectorAll('.tiers-pulse').forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });

    document.querySelectorAll('.timeline-content').forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
}

