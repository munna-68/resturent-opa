import { initNav } from "./initNav";
import { renderMenu } from './menu';
import { renderContact } from './contact';

import { setActiveButton } from "../index";

export function renderHome() {
  const rightDivContainer = document.querySelector('.right-div-container:not(.hidden)');

  rightDivContainer.innerHTML = '';
  
  initNav()

  const h2 = document.createElement('h2')
  h2.textContent = "Authentic Kacchi Biryani, Cooked the Traditional Way"

  rightDivContainer.appendChild(h2)

  const homeDescription = document.createElement('p')
  homeDescription.innerText = "Kacchi Ghar is a traditional Bangladeshi restaurant dedicated to preserving the authentic taste of Dhaka-style Kacchi Biryani."
  homeDescription.className = "home description"

  rightDivContainer.appendChild(homeDescription)

  const homeSubText = document.createElement('p')
  homeSubText.innerText = "We use premium basmati rice, tender marinated goat meat, saffron-infused layers, and time-honored dum cooking techniques passed down through generations."
  homeSubText.className = "home-sub sub-txt"

  rightDivContainer.appendChild(homeSubText)

  const btnContainer = document.createElement('div')
  btnContainer.className = "home-btn-container"

  const homeMenuBtn = document.createElement('button')
  homeMenuBtn.innerText = "View Our Menu"
  homeMenuBtn.className = "home-btn"

  const homeAboutBtn = document.createElement('button')
  homeAboutBtn.innerText = "About Us"
  homeAboutBtn.className = "home-btn"

  btnContainer.appendChild(homeMenuBtn)
  btnContainer.appendChild(homeAboutBtn)

  rightDivContainer.appendChild(btnContainer)

  homeMenuBtn.addEventListener('click', () => {
    renderMenu()
    setActiveButton('menu');
  })

  homeAboutBtn.addEventListener('click', () => {
    renderContact()
    setActiveButton('contact');
  })
}