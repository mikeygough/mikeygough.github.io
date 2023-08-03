const background = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
  const shape = document.createElement('div');
  shape.classList.add('shape', 'shape-blue'); // Add 'shape-blue' class to apply the blue color
  shape.style.left = `${e.clientX}px`;
  shape.style.top = `${e.clientY}px`;
  background.appendChild(shape);

  setTimeout(() => {
    shape.remove();
  }, 2000);
});