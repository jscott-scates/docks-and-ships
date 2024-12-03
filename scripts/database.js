const database = {
    docks: [
        {   id: 1, 
            location: "Shanghai, China", 
            volume: "43.5" 
        },{ id: 2, 
            location: "Busan, South Korea", 
            volume: "21.6" 
        },{ id: 3, 
            location: "Rotterdam, The Netherlands",
            volume: "14.35" 
        },{ id: 4, 
            location: "Antwerp, Belgium", 
            volume: "12.04" 
        }],
    haulers: [
        {
            id: 1,
            name: "Pioneering Spirit",
            dockId: ,
        },{
            id: 2,
            name: "Boaty McBoatface",
            dockId: ,
        },{
            id: 3,
            name: "Seawise Giant",
            dockId: ,
        },{
            id: 4,
            name: "Reality Bites",
            dockId: ,
        },{
            id: 5,
            name: "To Sea or Knot to Sea",
            dockId: ,
        },{
            id: 6,
            name: "The Codfather",
            dockId: ,
        },{
            id: 7,
            name: "Vitamin Sea",
            dockId: ,
        }],
    shippingShips: [
        {
            id: 1,
            name: "Esso Atlantic",
            haulerId: 
        },{
            id: 2,
            name: "Prairial",
            haulerId: 
        },{
            id: 3,
            name: "Palais Royal",
            haulerId: 
        },{
            id: 4,
            name: "Rivoli",
            haulerId: 
        },{
            id: 5,
            name: "Champs Elysee",
            haulerId: 
        },{
            id: 6,
            name: "Ever Ace",
            haulerId: 
        },{
            id: 7,
            name: "Nissei Maru",
            haulerId: 
        },{
            id: 8,
            name: "MSC Gulsun",
            haulerId: 
        }{
            id: 9,
            name: "HMM Rotterdam",
            haulerId: 
        },{
            id: 10,
            name: "CMA CGM Trocadero",
            haulerId: 
        }
    ]
}



export const getDocks = () => {
    return database.docks.map(dock => ({...docks}))
}
export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...haulers}))
}
export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShips}))
}