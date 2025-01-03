import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (dockClickEvent) => {
        const dockClicked = dockClickEvent.target
        const dockClickedId = dockClicked.dataset.id

        if(dockClicked.dataset.type === "dock"){
            const haulingShips = getHaulingShips()
            let haulingShipsArray = []    
        
            for (const hauler of haulingShips) {
                if(parseInt(dockClickedId) === hauler.dockId){
                    haulingShipsArray.push(hauler.name)
                }
            }
            
            if (haulingShipsArray.length>0){
                let joinedArray = haulingShipsArray.join(", ")
                window.alert(`The ${dockClicked.dataset.location} dock is currently unloading ${joinedArray}`)
            }else {
                window.alert(`The ${dockClicked.dataset.location} dock is currently unloading nothing.`)
            }            
        }
    }
)



export const dockList = () => {
    const docks = getDocks()
    const sortedDocksArray = [...docks].sort((a,b)=>(a.location.localeCompare(b.location)))

    let docksHTML = "<ul>"

    for (const dock of sortedDocksArray) {
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