import biriyaniImg from "../assets/images/biriyani.jpg";
import morogPolauImg from "../assets/images/morog-polau.jpg";
import teheriImg from "../assets/images/teheri.jpg";


export function renderMenu() {
  const rightDivContainer = document.querySelector('.right-div-container:not(.hidden)');
  rightDivContainer.innerHTML = '';
  
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

  const menuHeadingContainer = document.createElement('div')
  menuHeadingContainer.className = "menu-heading-container"

  const menuH2 = document.createElement('h2')
  menuH2.innerText = "Our Menu"
  menuH2.className = "menu-h2"

  menuHeadingContainer.appendChild(menuH2)

  const line = document.createElement('div')
  line.className = "line"

  menuHeadingContainer.appendChild(line)

  rightDivContainer.appendChild(menuHeadingContainer)

  const menuSubText = document.createElement('p')
  menuSubText.className = "menu sub-txt"
  menuSubText.innerText = "Kacchi Ghar is a traditional Bangladeshi restaurant dedicated to preserving the authentic taste of Dhaka-style Kacchi Biryani."

  rightDivContainer.appendChild(menuSubText)

  const menuContainer = document.createElement('div')
  menuContainer.className = "menu-container"

  const menuItemContainer = document.createElement('div')
  menuItemContainer.className = "menu-item-container"

  const menuImg = document.createElement('div')
  menuImg.className = "menu-img"

  const menuImgImg = document.createElement('img')
  menuImgImg.src = biriyaniImg
  menuImgImg.alt = "biriyani"

  menuImg.appendChild(menuImgImg)

  const menuDiscriptionContainer = document.createElement('div')
  menuDiscriptionContainer.className = "menu-description-container"

  const itemNameContainer = document.createElement('div')
  itemNameContainer.className = "item-name-container"

  const itemName = document.createElement('h4')
  itemName.innerText = "Kacchi Biryani"
  itemName.className = "item-name"

  const itemNameLine = document.createElement('div')
  itemNameLine.className = "item-name-line"

  itemNameContainer.append(itemName, itemNameLine)

  const itemSubText = document.createElement('p')
  itemSubText.innerText = "Kacchi Biryani is a traditional Bangladeshi dish made of rice, meat, and vegetables cooked in a special pot called a biryani."
  itemSubText.className = "item sub-txt"

  const price = document.createElement('p')
  price.innerText = "Price: ৳450"
  price.className = "price"

  menuDiscriptionContainer.append(itemNameContainer, itemSubText, price) 

  menuItemContainer.append(menuImg, menuDiscriptionContainer)
  menuContainer.appendChild(menuItemContainer)



  const morogItemContainer = document.createElement('div')
  morogItemContainer.className = "menu-item-container"

  const morogImg = document.createElement('div')
  morogImg.className = "menu-img"

  const morogImgImg = document.createElement('img')
  morogImgImg.src = morogPolauImg 
  morogImgImg.alt = "Morog Polao"

  morogImg.appendChild(morogImgImg)

  const morogDiscriptionContainer = document.createElement('div')
  morogDiscriptionContainer.className = "menu-description-container"

  const morogNameContainer = document.createElement('div')
  morogNameContainer.className = "item-name-container"

  const morogName = document.createElement('h4')
  morogName.innerText = "Morog Polao"
  morogName.className = "item-name"

  const morogNameLine = document.createElement('div')
  morogNameLine.className = "item-name-line"

  morogNameContainer.append(morogName, morogNameLine)

  const morogSubText = document.createElement('p')
  morogSubText.innerText = "Lightly spiced aromatic rice cooked with juicy chicken, raisins, and whole spices — a classic Bengali favorite."
  morogSubText.className = "item sub-txt"

  const morogPrice = document.createElement('p')
  morogPrice.innerText = "Price: ৳320"
  morogPrice.className = "price"

  morogDiscriptionContainer.append(morogNameContainer, morogSubText, morogPrice) 

  morogItemContainer.append(morogImg, morogDiscriptionContainer)
  menuContainer.appendChild(morogItemContainer)



  const tehariItemContainer = document.createElement('div')
  tehariItemContainer.className = "menu-item-container"

  const tehariImg = document.createElement('div')
  tehariImg.className = "menu-img"

  const tehariImgImg = document.createElement('img')
  tehariImgImg.src = teheriImg 
  tehariImgImg.alt = "Beef Tehari"

  tehariImg.appendChild(tehariImgImg)

  const tehariDiscriptionContainer = document.createElement('div')
  tehariDiscriptionContainer.className = "menu-description-container"

  const tehariNameContainer = document.createElement('div')
  tehariNameContainer.className = "item-name-container"

  const tehariName = document.createElement('h4')
  tehariName.innerText = "Beef Tehari"
  tehariName.className = "item-name"

  const tehariNameLine = document.createElement('div')
  tehariNameLine.className = "item-name-line"

  tehariNameContainer.append(tehariName, tehariNameLine)

  const tehariSubText = document.createElement('p')
  tehariSubText.innerText = "Old Dhaka-style beef tehari made with mustard oil, green chilies, and bold spices for a rich, deep flavor."
  tehariSubText.className = "item sub-txt"

  const tehariPrice = document.createElement('p')
  tehariPrice.innerText = "Price: ৳380"
  tehariPrice.className = "price"

  tehariDiscriptionContainer.append(tehariNameContainer, tehariSubText, tehariPrice) 

  tehariItemContainer.append(tehariImg, tehariDiscriptionContainer)
  menuContainer.appendChild(tehariItemContainer)

    rightDivContainer.appendChild(menuContainer)

}