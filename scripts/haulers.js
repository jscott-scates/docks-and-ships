import { getHaulingShips } from "./database.js"


export const HaulingShipList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `
            <li data-id="${hauler.id}"
            data-type="hauler">
                ${hauler.name}
            </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}