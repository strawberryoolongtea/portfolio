const logoElSubin = document.querySelectorAll('.logo__text')[0].textContent.split('')
const logoElKim = document.querySelectorAll('.logo__text')[1].textContent.split('')
const logoElPort = document.querySelectorAll('.logo__text')[2].textContent.split('')
console.log(logoElSubin, logoElKim, logoElPort);

// .text--creative 하위에 div{creative} 요소 생성
for (let i = 0; i < 10; i++) { // 10: div 요소 반복 생성 횟수
  const textCreative = document.querySelector('.text--creative');
  const elCreative = document.createElement('div');
  const elTextCreative = document.createTextNode('creative');

  elCreative.appendChild(elTextCreative);
  textCreative.appendChild(elCreative);
}

// .text--developer 하위에 div{developer} 요소 생성
for (let i = 0; i < 10; i++) { // 10: div 요소 반복 생성 횟수
  const textDeveloper = document.querySelector('.text--developer');
  const elDeveloper = document.createElement('div');
  const elTextDeveloper = document.createTextNode('developer');

  elDeveloper.appendChild(elTextDeveloper);
  textDeveloper.appendChild(elDeveloper);
}

// .about-text 하위에 div 요소 생성
for (let i = 0; i < 10; i++) {
  const textAbout = document.querySelector('.about__text');
  const elAbout = document.createElement('span');
  const elTextAbout = document.createTextNode('about me');

  elAbout.appendChild(elTextAbout);
  textAbout.appendChild(elAbout);
}