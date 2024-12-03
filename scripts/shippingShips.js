import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips ()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shippingShipsHTML += `
            <li data-id="${ship.id}"
            data-type="ship">
                ${ship.name}
            </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTMLHTML
}