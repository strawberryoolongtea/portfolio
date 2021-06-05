const scroll = document.querySelector('#scroll');
const logo = document.querySelector('.logo-container');
const rotate = document.querySelectorAll('.rotate');
const rotate2 = document.querySelectorAll('.rotate2');
const cartoon = document.querySelector('.cartoon');

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
      x: - window.scrollY * (i * 8) / 600,
      y: window.scrollY * (i * 10) / 800,
    })
  }
});
const about = document.querySelector('#intro .inner');
const aboutChild = [...document.querySelectorAll('#intro div')]
function addChild () {
  const div = document.createElement('span');
  const testTxt = document.createTextNode('about me');
  div.appendChild(testTxt)
  about.appendChild(div)
}
setTimeout(function () {
  let aboutChildAdd = setInterval(addChild, 200);
  setTimeout(function () {
    clearTimeout(aboutChildAdd)
  }, 8200)
}, 5000)
window.addEventListener('scroll', () => {
  setTimeout(() => {
    for (let i = 0; i < aboutChild.length; i++) {
      gsap.to(aboutChild[i], {rotation: -50})
    }
  }, 13200)
})