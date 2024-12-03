import { dockList } from "./docks.js"
import { haulingShipList } from "./haulers.js"
import { shippingShipsList } from "./shippingShips.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Sail the Seven Seas Shipping Network</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${haulingShipList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
</article>`

mainContainer.innerHTML = applicationHTML