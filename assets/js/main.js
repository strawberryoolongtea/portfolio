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
function addChild () {
  const div = document.createElement('span');
  const testTxt = document.createTextNode('about me');
  div.appendChild(testTxt)
  about.appendChild(div)
}
setTimeout(function () {
  let aboutChildAdd = setInterval(addChild, 100);
  setTimeout(function () {
    clearTimeout(aboutChildAdd)
  }, 8100)
  setTimeout(() => {
    const aboutChild = [...document.querySelectorAll('#intro span')]
    for (let i = 0; i < aboutChild.length; i++) {
      gsap.to(aboutChild[i], {rotation: -50})
    }
  },8200)
  setTimeout(function () {
    const photo = [...document.querySelectorAll('.site-view')];
    setTimeout(function () {
      photo[0].style.display = 'none'
    }, 8300)
  },8200)
}, 5000)