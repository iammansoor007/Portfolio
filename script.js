

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
  });



  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".skill-bar").forEach((skill) => {
    gsap.to(skill, {
      width: (index, target) => target.getAttribute("data-bar") + "%",
      scrollTrigger: {
        trigger: skill,
        start: "top 80%",

      },
    });
  });
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.utils.toArray(".dataspan").forEach((skill) => {
  //   gsap.to(skill, {
  //     width: (index, target) => target.getAttribute("data-bar") + "%",
  //     scrollTrigger: {
  //       trigger: skill,
  //       start: "top 80%",

  //     },
  //   });
  // });


  const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 800,
    reset: true,
  });



  sr.reveal('.education-item:nth-child(1)', {
    delay: 500,
    distance: '50px',
    duration: 500,
    easing: 'ease-in',
    origin: 'left',
    reset: true
  });

  sr.reveal('.education-item:nth-child(2)', {
    delay: 500,
    distance: '50px',
    duration: 500,
    easing: 'ease-in',
    origin: 'right',
    reset: true
  });

  sr.reveal('.education-item:nth-child(3)', {
    delay: 500,
    distance: '100px',
    duration: 500,
    easing: 'ease-in',
    origin: 'left',
    reset: true
  });

  sr.reveal('.myname', {
    distance: '100px',
    duration: 1100,
    easing: 'ease-in-out',
    origin: 'left',
    reset: false
  });

  sr.reveal('#mydiscription', {
    distance: '200px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'left',
    reset: true
  });

  sr.reveal('.githubbutton', {
    distance: '200px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'left',
    reset: true
  });

  sr.reveal('.socialicon', {
    distance: '200px',
    duration: 1000,
    easing: 'ease-in',
    origin: 'left',
    reset: true
  });

  sr.reveal('.imagepart', {
    distance: '200px',
    duration: 700,
    easing: 'ease-in-out',
    origin: 'right',
    reset: true
  });

  sr.reveal('.logo', {
    distance: '100px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'top',
    reset: true
  });

  sr.reveal('.navlogo', {
    distance: '100px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'top',
    reset: true
  });

  sr.reveal('.conatctpage', {
    distance: '500px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
  });

  sr.reveal('.percentagebar', {
    distance: '15px',
    duration: 700,
    easing: 'ease-in',
    origin: 'right',
    reset: true
  });
});

Shery.textAnimate("#frontendtext", {
  style: 1,
  y: 8,
  duration: 0.2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.textAnimate(".whoiam h2", {
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.4,
  reset: true
});

Shery.textAnimate(".letsconnect h2", {
  style: 1,
  y: 8,
  duration: 0.2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.textAnimate(".navmain .navfunction ul li a ", {
  style: 1,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".headingskill", {
  style: 1,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.15,
});

Shery.makeMagnet(".githubbutton", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".githubbutton a #facebookicon", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".socialicon  #whatsappicon", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".githubbutton a #instaicon", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".navmain .navfunction ul li a", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
