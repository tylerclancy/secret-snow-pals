document.addEventListener('DOMContentLoaded', () => {
  const code = document.querySelector('.code');
  const title = document.querySelector('.title');

  document.querySelector('.unwrap-button').addEventListener('click', () => {
    code.classList.add('open');
    title.classList.add('open');
  });
});
