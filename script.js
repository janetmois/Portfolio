// gsap.to(".text", {
//     text: "My name is Janet. I am a web developer.", 
//     duration: 3,
//     repeat: 3, // чтобы повторялось бесконечно поставить -1
//     repeatDelay: .7, // отсрочка повтора
//     ease: "power1.in",
//     yoyo: true, // удаляет текст
//     // можно сделать delay: 2, написать готовую фразу в html и заменить ее через этот код
// })
// const text = document.querySelector(".flight");
// const splitText = (el) => {
//     el.innerHTML = el.textContent.replace(/(\S*)/g, m =>{
//         return `<div class="word">` +
//         m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
//         `</div>`;
//     });
//     return el;
// };
// const split = splitText(text);
// function random(min, max){
//     return (Math.random() * (max - min)) + min;
// }
// Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
//     TweenMax.from(el, 1.5, {
//         opacity: 0.9,
//         scale: .9,
//         x: random(100, 300),
//         y: random(100, 300),
//         z: random(100, 300),
//         delay: idx * 0.02,
//         repeat: 0,
//     })
// });

// для анимациии (начало)
/* ---- particles.js config ---- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 80,
        height: 100,
      },
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#000000",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 200,
        rotateY: 800,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 1400,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// для анимациии (конец)