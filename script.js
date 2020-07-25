const videoBlocks = document.querySelectorAll('.section-videos-block-circle');

videoBlocks.forEach((block) =>
  block.addEventListener('click', (e) => {
    const video = block.firstElementChild;
    if (video.paused) {
      block.lastElementChild.style.display = 'none';
      video.play();
    } else {
      block.lastElementChild.style.display = 'flex';
      video.pause();
    }
  })
);

const circlesBlock = document.querySelector('.main-circles');
const circles = circlesBlock.children;

Array.from(circles).forEach((circle) => {
  circle.addEventListener('mouseover', (e) => {
    if (e.target === circlesBlock.firstElementChild) return;
    e.target.classList.add('main-circles-circle-active');
    circlesBlock.firstElementChild.classList.remove('main-circles-circle-active');
  });

  circle.addEventListener('mouseout', (e) => {
    e.target.classList.remove('main-circles-circle-active');
    setTimeout(() => {
      if (document.querySelector('.main-circles-circle-active')) return;
      circlesBlock.firstElementChild.classList.add('main-circles-circle-active');
    }, 1000);
  });
});

const selectToggler = document.querySelector('.header-div-text-right');
const selectBlock = document.querySelector('.header-div-popup');
const options = selectBlock.children;

selectToggler.addEventListener('click', (e) => {
  e.target.style.visibility = 'hidden';
  selectBlock.style.display = 'flex';
});

Array.from(options).forEach((option) => {
  option.addEventListener('click', (e) => {
    selectToggler.style.visibility = 'visible';
    selectToggler.textContent = e.target.textContent;
    selectBlock.style.display = 'none';
  });
});

const videoBtn = document.querySelector('.section-video-btn');
const popup = document.querySelector('.popup');
const popupVideo = document.querySelector('.popup-video');
const popupClose = document.querySelector('.popup-close');

videoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.style.overflowY = 'hidden';
  popup.style.display = 'flex';
  popupVideo.style.animationName = 'popup';
  popupVideo.play();
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (!popupVideo.paused) {
    popupVideo.pause();
  }
  document.body.style.overflowY = 'visible';
  popup.style.display = 'none';
  popupVideo.currentTime = 0;
});
