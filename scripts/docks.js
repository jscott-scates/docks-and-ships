import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (dockClickEvent) => {
        const dockClicked = dockClickEvent.target
        const dockClickedId = dockClicked.dataset.id

        if(dockClicked.dataset.type === "dock"){
            const haulingShips = getHaulingShips()
            let haulingShipsArray = ["nothing"]    
        
            for (const hauler of haulingShips) {
                if(parseInt(dockClickedId) === hauler.dockId){
                    haulingShipsArray.pop()
                    haulingShipsArray.push(hauler.name)
                }
            }
            window.alert(`The ${dockClicked.dataset.location} dock is currently unloading ${haulingShipsArray}`)
        }
    }
)



export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
            <li data-id="${dock.id}"
            data-type="dock"
            data-location="${dock.location}">
                ${dock.location} can hold ${dock.volume} million tons of cargo. 
            </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}