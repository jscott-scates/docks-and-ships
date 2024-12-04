import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (shippingShipClickEvent) => {
        const shippingShipClicked = shippingShipClickEvent.target
        const shippingShipHauler = shippingShipClicked.dataset.hauleridforeignkey
        
        if(shippingShipClicked.dataset.type === "ship"){
            const haulingShips = getHaulingShips()
            let haulingShip = { name: "Incorrect" }

            for (const hauler of haulingShips) {
                if(parseInt(shippingShipHauler) === hauler.id){
                    haulingShip = hauler.name
                }
            }
            window.alert(`${shippingShipClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)

export const shippingShipsList = () => {
    const shippingShips = getShippingShips ()
    const sortedShippingShipsArray = [...shippingShips].sort((a,b)=>(a.name.localeCompare(b.name)))

    let shippingShipsHTML = "<ul>"

    for (const ship of sortedShippingShipsArray) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shippingShipsHTML += `
            <li data-id="${ship.id}"
            data-hauleridforeignkey="${ship.haulerId}"
            data-name="${ship.name}"
            data-type="ship">
                ${ship.name}
            </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}