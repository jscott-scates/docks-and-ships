import { getHaulingShips, getShippingShips } from "./database.js"
document.addEventListener(
    "click",
    (haulerClickEvent) => {
        const haulerClicked = haulerClickEvent.target
        if(haulerClicked.dataset.type === "hauler"){
            let shippingShipsCounter = 0
            const shippingShips = getShippingShips()
            for (const ship of shippingShips) {
                if(parseInt(haulerClicked.dataset.id) === ship.haulerId ) {
                    shippingShipsCounter++ 
                }
            } 
            window.alert(`This hauler is pulling ${shippingShipsCounter} ship(s).`)
        }
    }
)


export const haulingShipList = () => {
    const haulers = getHaulingShips()
    const sortedHaulersArray = [...haulers].sort((a,b)=>(a.name.localeCompare(b.name)))

    let haulersHTML = "<ul>"

    for (const hauler of sortedHaulersArray) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `
            <li data-dockidforeignkey = "${hauler.dockId}"
            data-id = "${hauler.id}"
            data-type="hauler">
                ${hauler.name}
            </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}