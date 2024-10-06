const noticeEl = document.querySelector('.notice');

if (noticeEl) {
  const noticeCloseEl = document.querySelector('.notice__close');

  noticeCloseEl.addEventListener('click', () => {
    noticeEl.classList.add('notice--hidden');
  })
}