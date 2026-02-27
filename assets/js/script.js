const boxes = document.querySelectorAll('.specialization-box');

  boxes.forEach(box => {
    const border = box.querySelector('.hover-border');

    box.addEventListener('mouseenter', () => {
      border.style.opacity = '1';
      border.style.transform = 'scale(1)';
    });

    box.addEventListener('mouseleave', () => {
      border.style.opacity = '0';
      border.style.transform = 'scale(0.8)';
    });
  });