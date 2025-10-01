const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I love you too! ❤';
    gif.style.display = 'block'; // GIF ko dikhayein
    // Buttons ko gayab kar dein
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    // .wrapper div ke andar button ko move karein
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});