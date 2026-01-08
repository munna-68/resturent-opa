import './styles/style.css';
import { renderHome } from './js/home';
import { renderMenu } from './js/menu';
import { renderContact } from './js/contact';


document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  setActiveButton('home');
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('nav-btn')) {
    
    if (e.target.classList.contains('home')) {
      renderHome();
      setActiveButton('home');
    } 
    else if (e.target.classList.contains('menu')) {
      renderMenu();
      setActiveButton('menu');
    } 
    else if (e.target.classList.contains('contact')) {
      renderContact();
      setActiveButton('contact');
    }
  }
});

export function setActiveButton(tabName) {
  const buttons = document.querySelectorAll('.nav-btn');
  
  buttons.forEach(btn => {
    if (btn.classList.contains(tabName)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}