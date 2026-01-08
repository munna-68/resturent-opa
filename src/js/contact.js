import mapImg from "../assets/images/map.png";

import { initNav } from "./initNav";
export function renderContact() {
  const rightDivContainer = document.querySelector('.right-div-container:not(.hidden)');
  rightDivContainer.innerHTML = '';
  
  initNav()

  const visitContainer = document.createElement('div')

  const visitHeadingContainer = document.createElement('div')
  visitHeadingContainer.className = "menu-heading-container"

  const visitH2 = document.createElement('h2')
  visitH2.innerText = "Visit Kacchi Ghar"
  visitH2.className = "menu-h2"

  const visitLine = document.createElement('div')
  visitLine.className = "line"

  visitHeadingContainer.append(visitH2, visitLine)

  const addressText = document.createElement('p')
  addressText.className = "contact-sub sub-txt"
  addressText.innerHTML = `Kacchi Ghar <br>
          House 21, Road 7 <br>
          Dhanmondi, Dhaka 1209 <br>
          Bangladesh`

  const contactText = document.createElement('p')
  contactText.className = "contact-sub sub-txt"
  contactText.innerHTML = `📞 Phone: +880 17XX-XXXXXX <br>
            📧 Email: info@kacchighar.com`

  const hoursText = document.createElement('p')
  hoursText.className = "contact-sub sub-txt"
  hoursText.innerHTML = `Saturday – Thursday: 12:00 PM – 10:30 PM <br>
          Friday: 1:30 PM – 11:00 PM`

  const mapContainer = document.createElement('div')
  mapContainer.className = "map-container"

  const mapImgElement = document.createElement('img')
  mapImgElement.src = mapImg 
  mapImgElement.alt = "map"

  mapContainer.appendChild(mapImgElement)

  const locationHeader = document.createElement('h4')
  locationHeader.innerText = "Location: Dhanmondi, Dhaka"

  visitContainer.append(
    visitHeadingContainer, 
    addressText, 
    contactText, 
    hoursText, 
    mapContainer, 
    locationHeader
  )

  rightDivContainer.appendChild(visitContainer)
}