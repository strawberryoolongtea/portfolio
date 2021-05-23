const scroll = document.querySelector('#scroll');
const logo = document.querySelector('.logo-container');
const rotate = document.querySelectorAll('.rotate');
const rotate2 = document.querySelectorAll('.rotate2');
const cartoon = document.querySelector('.cartoon');

console.log('test')
window.addEventListener('scroll', () => {
 scroll.innerText = window.scrollY;
  for (let i = 0; i < rotate.length; i++) {
    gsap.to(rotate[i], {
     rotation: - window.scrollY * (i * 5) / 800,
     x: window.scrollY * (i * 5) / 100,
     y: - window.scrollY * (i * 5) / 800,
     z: window.scrollY * (i * 5) / 100
    })
  }
  for (let i = 0; i < rotate2.length; i++) {
    gsap.to(rotate2[i], {
      rotation: - window.scrollY * (i * 5) / 1200,
      x: - window.scrollY * (i * 8) / 800,
      y: window.scrollY * (i * 10) / 800,
    })
  }
});