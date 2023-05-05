const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('show');
  };
  
  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', toggleMenu);