export function initNav() {
    const rightDivContainer = document.querySelector('.right-div-container:not(.hidden)');

  const header = document.createElement('header')
  const nav = document.createElement('nav')

  const homeBtn = document.createElement('button')
  const menuBtn = document.createElement('button')
  const contactBtn = document.createElement('button')

  homeBtn.textContent = "Home"
  homeBtn.className = "home nav-btn"

  menuBtn.textContent = "Menu"
  menuBtn.className = "menu nav-btn" 

  contactBtn.textContent = "Contact"
  contactBtn.className = "contact nav-btn"

  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(contactBtn)

  header.appendChild(nav)

  rightDivContainer.appendChild(header)
}