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

        // Was a shipping ship list item clicked?

            // Get the haulerId value of the shipping ship clicked

            // Define a default object for the found hauler
            

            // Iterate the array of hauler objects

                // Does the haulerId foreign key match the id of the current hauler?

                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
    }
)

export const shippingShipsList = () => {
    const shippingShips = getShippingShips ()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
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